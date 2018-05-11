import request from "request-promise";
import { Resolvers } from "../../../types/resolvers";
import { makeMiddleware, authMiddleware } from "../../../utils/middlewares";
import User from "../../../entities/User";
import { createJWT } from "../../../utils/createJWT";
import { FacebookConnectResolver } from "../../../types/graph";

const resolvers: Resolvers = {
  Mutation: {
    facebookConnect: async (
      _,
      { token }: { token: string },
      { req }
    ): Promise<FacebookConnectResolver> => {
      // https://developers.facebook.com/tools/explorer/?method=GET
      const fbURL = `https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,last_name,email`;
      const fbRequest = await request(fbURL);
      const { id, first_name, last_name, email } = JSON.parse(fbRequest);
      const formatted = {
        facebookId: id,
        firstName: first_name,
        lastName: last_name,
        email: `${id}@facebook.com`,
        verifiedEmail: true,
        loginType: "facebook",
        profilePhoto: `https://graph.facebook.com/${id}/picture?type=square`
      };
      let existingUser: User = await User.findOne({ facebookId: id });
      if (existingUser) {
        await User.update({ facebookId: id }, formatted);
        const updatedUser: User = await User.findOne({ facebookId: id });
        const token: string = createJWT(existingUser.id);
        return {
          ok: true,
          token,
          user: updatedUser,
          error: null
        };
      } else {
        const user: User = await User.create(formatted).save();
        const token: string = createJWT(user.id);
        return {
          ok: true,
          token,
          user,
          error: null
        };
      }
    }
  }
};

export default resolvers;