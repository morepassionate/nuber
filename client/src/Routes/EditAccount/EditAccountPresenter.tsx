import PropTypes from "prop-types";
import React from "react";
import { MutationFn } from "react-apollo";
import styled from "styled-components";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Input from "../../Components/Input";

const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  padding-top: 150px;
`;

const Wrapper = styled.div`
  overflow-y: scroll;
`;

interface IProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: MutationFn;
  loading: boolean;
}

const EditAccountPresenter: React.SFC<IProps> = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  handleInputChange,
  loading,
  onSubmit
}) => (
  <Wrapper className={"shouldScroll"}>
    <Header backTo="/" title={"Edit Account"} />
    <Container>
      <Input
        onChange={handleInputChange}
        value={firstName}
        name={"firstName"}
        type={"text"}
        required={true}
        displayName={"First Name"}
      />
      <Input
        onChange={handleInputChange}
        value={lastName}
        name={"lastName"}
        type={"text"}
        required={true}
        displayName={"Last Name"}
      />
      <Input
        onChange={handleInputChange}
        value={phoneNumber}
        name={"phoneNumber"}
        type={"tel"}
        required={true}
        displayName={"Phone Number"}
      />
      <Input
        onChange={handleInputChange}
        value={email}
        name={"email"}
        type={"tel"}
        required={true}
        displayName={"Email"}
      />
      <Input
        onChange={handleInputChange}
        value={"••••••"}
        name={"password"}
        type={"tel"}
        required={true}
        displayName={"Password"}
      />
      <Button
        onClick={onSubmit}
        text={loading ? "Updating Profile" : "Update Profile"}
        disabled={loading}
      />
    </Container>
  </Wrapper>
);

EditAccountPresenter.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EditAccountPresenter;