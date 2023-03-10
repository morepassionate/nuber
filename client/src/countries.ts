const countries = [
  { name: "Afghanistan", dial_code: "+93", code: "AF", flag: "๐ฆ๐ซ" },
  { name: "รland Islands", dial_code: "+358", code: "AX", flag: "๐ฆ๐ฝ" },
  { name: "Albania", dial_code: "+355", code: "AL", flag: "๐ฆ๐ฑ" },
  { name: "Algeria", dial_code: "+213", code: "DZ", flag: "๐ฉ๐ฟ" },
  {
    name: "American Samoa",
    flag: "๐บ๐ธ",
    dial_code: "+1684",
    code: "AS"
  },
  { name: "Andorra", dial_code: "+376", code: "AD", flag: "๐ฆ๐ฉ" },
  { name: "Angola", dial_code: "+244", code: "AO", flag: "๐ฆ๐ด" },
  { name: "Anguilla", dial_code: "+1264", code: "AI", flag: "๐ฆ๐ฎ" },
  { name: "Antarctica", dial_code: "+672", code: "AQ", flag: "๐ฆ๐ถ" },
  {
    name: "Antigua and Barbuda",
    dial_code: "+1268",
    code: "AG",
    flag: "๐ฆ๐ฌ"
  },
  { name: "Argentina", dial_code: "+54", code: "AR", flag: "๐ฆ๐ท" },
  { name: "Armenia", dial_code: "+374", code: "AM", flag: "๐ฆ๐ฒ" },
  { name: "Aruba", dial_code: "+297", code: "AW", flag: "๐ฆ๐ผ" },
  { name: "Australia", dial_code: "+61", code: "AU", flag: "๐ฆ๐บ" },
  { name: "Austria", dial_code: "+43", code: "AT", flag: "๐ฆ๐น" },
  { name: "Azerbaijan", dial_code: "+994", code: "AZ", flag: "๐ฆ๐ฟ" },
  { name: "Bahamas", dial_code: "+1242", code: "BS", flag: "๐ง๐ธ" },
  { name: "Bahrain", dial_code: "+973", code: "BH", flag: "๐ง๐ธ" },
  { name: "Bangladesh", dial_code: "+880", code: "BD", flag: "๐ง๐ฉ" },
  { name: "Barbados", dial_code: "+1246", code: "BB", flag: "๐ง๐ง" },
  { name: "Belarus", dial_code: "+375", code: "BY", flag: "๐ง๐พ" },
  { name: "Belgium", dial_code: "+32", code: "BE", flag: "๐ง๐ช" },
  { name: "Belize", dial_code: "+501", code: "BZ", flag: "๐ง๐ฟ" },
  { name: "Benin", dial_code: "+229", code: "BJ", flag: "๐ง๐ฏ" },
  { name: "Bermuda", dial_code: "+1441", code: "BM", flag: "๐ง๐ฒ" },
  { name: "Bhutan", dial_code: "+975", code: "BT", flag: "๐ง๐น" },
  {
    name: "Bolivia, Plurinational State of bolivia",
    dial_code: "+591",
    code: "BO",
    flag: "๐ง๐ด"
  },
  {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA",
    flag: "๐ง๐ฆ"
  },
  { name: "Botswana", dial_code: "+267", code: "BW", flag: "๐ง๐ผ" },
  { name: "Bouvet Island", dial_code: "+47", code: "BV", flag: "๐ณ" },
  { name: "Brazil", dial_code: "+55", code: "BR", flag: "๐ง๐ท" },
  {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO",
    flag: "๐ฎ๐ด"
  },
  {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN",
    flag: "๐ง๐ณ"
  },
  { name: "Bulgaria", dial_code: "+359", code: "BG", flag: "๐ง๐ฌ" },
  { name: "Burkina Faso", dial_code: "+226", code: "BF", flag: "๐ง๐ซ" },
  { name: "Burundi", dial_code: "+257", code: "BI", flag: "๐ง๐ฎ" },
  { name: "Cambodia", dial_code: "+855", code: "KH", flag: "๐ฐ๐ญ" },
  { name: "Cameroon", dial_code: "+237", code: "CM", flag: "๐จ๐ฒ" },
  { name: "Canada", dial_code: "+1", code: "CA", flag: "๐จ๐ฆ" },
  { name: "Cape Verde", dial_code: "+238", code: "CV", flag: "๐จ๐ป" },
  {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY",
    flag: "๐ฐ๐พ"
  },
  {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF",
    flag: "๐จ๐ซ"
  },
  { name: "Chad", dial_code: "+235", code: "TD", flag: "๐น๐ฉ" },
  { name: "Chile", dial_code: "+56", code: "CL", flag: "๐จ๐ฑ" },
  { name: "China", dial_code: "+86", code: "CN", flag: "๐จ๐ณ" },
  {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX",
    flag: "๐จ๐ฝ"
  },
  {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC",
    flag: "๐จ๐จ"
  },
  { name: "Colombia", dial_code: "+57", code: "CO", flag: "" },
  { name: "Comoros", dial_code: "+269", code: "KM", flag: "๐ฐ๐ฒ" },
  { name: "Congo", dial_code: "+242", code: "CG", flag: "๐จ๐ฌ" },
  {
    name: "Congo, The Democratic Republic of the Congo",
    dial_code: "+243",
    code: "CD",
    flag: "๐จ๐ฉ"
  },
  { name: "Cook Islands", dial_code: "+682", code: "CK", flag: "๐จ๐ฐ" },
  { name: "Costa Rica", dial_code: "+506", code: "CR", flag: "๐จ๐ท" },
  { name: "Cote d'Ivoire", dial_code: "+225", code: "CI", flag: "๐จ๐ฎ" },
  { name: "Croatia", dial_code: "+385", code: "HR", flag: "๐ญ๐ท" },
  { name: "Cuba", dial_code: "+53", code: "CU", flag: "๐จ๐บ" },
  { name: "Cyprus", dial_code: "+357", code: "CY", flag: "๐จ๐พ" },
  { name: "Czech Republic", dial_code: "+420", code: "CZ", flag: "๐จ๐ฟ" },
  { name: "Denmark", dial_code: "+45", code: "DK", flag: "๐ฉ๐ฐ" },
  { name: "Djibouti", dial_code: "+253", code: "DJ", flag: "๐ฉ๐ฏ" },
  { name: "Dominica", dial_code: "+1767", code: "DM", flag: "๐ฉ๐ฒ" },
  {
    name: "Dominican Republic",
    dial_code: "+1849",
    code: "DO",
    flag: "๐จ๐ฉ"
  },
  { name: "Ecuador", dial_code: "+593", code: "EC", flag: "๐ช๐จ" },
  { name: "Egypt", dial_code: "+20", code: "EG", flag: "๐ช๐ฌ" },
  { name: "El Salvador", dial_code: "+503", code: "SV", flag: "๐ธ๐ป" },
  {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ",
    flag: "๐ฌ๐ถ"
  },
  { name: "Eritrea", dial_code: "+291", code: "ER", flag: "๐ช๐ท" },
  { name: "Estonia", dial_code: "+372", code: "EE", flag: "๐ช๐ช" },
  { name: "Ethiopia", dial_code: "+251", code: "ET", flag: "๐ช๐น" },
  {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK",
    flag: "๐ซ๐ฐ"
  },
  { name: "Faroe Islands", dial_code: "+298", code: "FO", flag: "" },
  { name: "Fiji", dial_code: "+679", code: "FJ", flag: "๐ซ๐ฏ" },
  { name: "Finland", dial_code: "+358", code: "FI", flag: "๐ซ๐ฎ" },
  { name: "France", dial_code: "+33", code: "FR", flag: "๐ซ๐ท" },
  { name: "French Guiana", dial_code: "+594", code: "GF", flag: "๐ฌ๐ซ" },
  {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF",
    flag: "๐ต๐ซ"
  },
  {
    name: "French Southern Territories",
    dial_code: "+262",
    code: "TF",
    flag: "๐น๐ซ"
  },
  { name: "Gabon", dial_code: "+241", code: "GA", flag: "๐ฌ๐ฆ" },
  { name: "Gambia", dial_code: "+220", code: "GM", flag: "๐ฌ๐ฒ" },
  { name: "Georgia", dial_code: "+995", code: "GE", flag: "๐ฌ๐ช" },
  { name: "Germany", dial_code: "+49", code: "DE", flag: "๐ฉ๐ช" },
  { name: "Ghana", dial_code: "+233", code: "GH", flag: "๐ฌ๐ญ" },
  { name: "Gibraltar", dial_code: "+350", code: "GI", flag: "๐ฌ๐ฎ" },
  { name: "Greece", dial_code: "+30", code: "GR", flag: "๐ฌ๐ท" },
  { name: "Greenland", dial_code: "+299", code: "GL", flag: "๐ฌ๐ฑ" },
  { name: "Grenada", dial_code: "+1473", code: "GD", flag: "๐ฌ๐ฉ" },
  { name: "Guadeloupe", dial_code: "+590", code: "GP", flag: "๐ฌ๐ต" },
  { name: "Guam", dial_code: "+1671", code: "GU", flag: "๐ฌ๐บ" },
  { name: "Guatemala", dial_code: "+502", code: "GT", flag: "๐ฌ๐น" },
  { name: "Guernsey", dial_code: "+44", code: "GG", flag: "๐ฌ๐ฌ" },
  { name: "Guinea", dial_code: "+224", code: "GN", flag: "๐ฌ๐ณ" },
  { name: "Guinea-Bissau", dial_code: "+245", code: "GW", flag: "๐ฌ๐ผ" },
  { name: "Guyana", dial_code: "+592", code: "GY", flag: "๐ฌ๐พ" },
  { name: "Haiti", dial_code: "+509", code: "HT", flag: "๐ญ๐น" },
  {
    name: "Heard Island and Mcdonald Islands",
    dial_code: "+0",
    code: "HM",
    flag: "๐ณ"
  },
  {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA",
    flag: "๐ป๐ฆ"
  },
  { name: "Honduras", dial_code: "+504", code: "HN", flag: "๐ญ๐ณ" },
  { name: "Hong Kong", dial_code: "+852", code: "HK", flag: "๐ญ๐ฐ" },
  { name: "Hungary", dial_code: "+36", code: "HU", flag: "๐ญ๐บ" },
  { name: "Iceland", dial_code: "+354", code: "IS", flag: "๐ฎ๐ธ" },
  { name: "India", dial_code: "+91", code: "IN", flag: "๐ฎ๐ณ" },
  { name: "Indonesia", dial_code: "+62", code: "ID", flag: "๐ฎ๐ฉ" },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    dial_code: "+98",
    code: "IR",
    flag: "๐ฎ๐ท"
  },
  { name: "Iraq", dial_code: "+964", code: "IQ", flag: "๐ฎ๐ถ" },
  { name: "Ireland", dial_code: "+353", code: "IE", flag: "๐ฎ๐ช" },
  { name: "Isle of Man", dial_code: "+44", code: "IM", flag: "๐ฎ๐ฒ" },
  { name: "Israel", dial_code: "+972", code: "IL", flag: "๐ฎ๐ฑ" },
  { name: "Italy", dial_code: "+39", code: "IT", flag: "๐ฎ๐น" },
  { name: "Jamaica", dial_code: "+1876", code: "JM", flag: "๐ฏ๐ฒ" },
  { name: "Japan", dial_code: "+81", code: "JP", flag: "๐ฏ๐ต" },
  { name: "Jersey", dial_code: "+44", code: "JE", flag: "๐ฏ๐ช" },
  { name: "Jordan", dial_code: "+962", code: "JO", flag: "๐ฏ๐ด" },
  { name: "Kazakhstan", dial_code: "+7", code: "KZ", flag: "๐ฐ๐ฟ" },
  { name: "Kenya", dial_code: "+254", code: "KE", flag: "๐ฐ๐ช" },
  { name: "Kiribati", dial_code: "+686", code: "KI", flag: "๐ฐ๐ฎ" },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: "+850",
    code: "KP",
    flag: "๐ฐ๐ต"
  },
  {
    name: "Korea, Republic of South Korea",
    dial_code: "+82",
    code: "KR",
    flag: "๐ฐ๐ท"
  },
  { name: "Kosovo", dial_code: "+383", code: "XK", flag: "๐ฝ๐ฐ" },
  { name: "Kuwait", dial_code: "+965", code: "KW", flag: "๐ฐ๐ผ" },
  { name: "Kyrgyzstan", dial_code: "+996", code: "KG", flag: "๐ฐ๐ฌ" },
  { name: "Laos", dial_code: "+856", code: "LA", flag: "๐ฑ๐ฆ" },
  { name: "Latvia", dial_code: "+371", code: "LV", flag: "๐ฑ๐ป" },
  { name: "Lebanon", dial_code: "+961", code: "LB", flag: "๐ฑ๐ง" },
  { name: "Lesotho", dial_code: "+266", code: "LS", flag: "๐ฑ๐ธ" },
  { name: "Liberia", dial_code: "+231", code: "LR", flag: "๐ฑ๐ท" },
  {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY",
    flag: "๐ฑ๐พ"
  },
  { name: "Liechtenstein", dial_code: "+423", code: "LI", flag: "๐ฑ๐ฎ" },
  { name: "Lithuania", dial_code: "+370", code: "LT", flag: "๐ฑ๐น" },
  { name: "Luxembourg", dial_code: "+352", code: "LU", flag: "๐ฑ๐บ" },
  { name: "Macao", dial_code: "+853", code: "MO", flag: "๐ฒ๐ด" },
  { name: "Macedonia", dial_code: "+389", code: "MK", flag: "๐ฒ๐ฐ" },
  { name: "Madagascar", dial_code: "+261", code: "MG", flag: "๐ฒ๐ฌ" },
  { name: "Malawi", dial_code: "+265", code: "MW", flag: "๐ฒ๐ผ" },
  { name: "Malaysia", dial_code: "+60", code: "MY", flag: "๐ฒ๐พ" },
  { name: "Maldives", dial_code: "+960", code: "MV", flag: "๐ฒ๐ป" },
  { name: "Mali", dial_code: "+223", code: "ML", flag: "๐ฒ๐ฑ" },
  { name: "Malta", dial_code: "+356", code: "MT", flag: "๐ฒ๐น" },
  {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH",
    flag: "๐ฒ๐ญ"
  },
  { name: "Martinique", dial_code: "+596", code: "MQ", flag: "๐ฒ๐ถ" },
  { name: "Mauritania", dial_code: "+222", code: "MR", flag: "๐ฒ๐ท" },
  { name: "Mauritius", dial_code: "+230", code: "MU", flag: "๐ฒ๐บ" },
  { name: "Mayotte", dial_code: "+262", code: "YT", flag: "๐พ๐น" },
  { name: "Mexico", dial_code: "+52", code: "MX", flag: "๐ฒ๐ฝ" },
  {
    name: "Micronesia, Federated States of Micronesia",
    dial_code: "+691",
    code: "FM",
    flag: "๐ซ๐ฒ"
  },
  { name: "Moldova", dial_code: "+373", code: "MD", flag: "๐ฒ๐ฉ" },
  { name: "Monaco", dial_code: "+377", code: "MC", flag: "๐ฒ๐จ" },
  { name: "Mongolia", dial_code: "+976", code: "MN", flag: "๐ฒ๐ณ" },
  { name: "Montenegro", dial_code: "+382", code: "ME", flag: "๐ฒ๐ช" },
  { name: "Montserrat", dial_code: "+1664", code: "MS", flag: "๐ฒ๐ธ" },
  { name: "Morocco", dial_code: "+212", code: "MA", flag: "๐ฒ๐ฆ" },
  { name: "Mozambique", dial_code: "+258", code: "MZ", flag: "๐ฒ๐ฟ" },
  { name: "Myanmar", dial_code: "+95", code: "MM", flag: "๐ฒ๐ฒ" },
  { name: "Namibia", dial_code: "+264", code: "NA", flag: "๐ณ๐ฆ" },
  { name: "Nauru", dial_code: "+674", code: "NR", flag: "๐ณ๐ท" },
  { name: "Nepal", dial_code: "+977", code: "NP", flag: "๐ณ๐ต" },
  { name: "Netherlands", dial_code: "+31", code: "NL", flag: "๐ณ๐ฑ" },
  {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN",
    flag: "๐ณ๐ฑ"
  },
  { name: "New Caledonia", dial_code: "+687", code: "NC", flag: "๐ณ๐จ" },
  { name: "New Zealand", dial_code: "+64", code: "NZ", flag: "๐ณ๐ฟ" },
  { name: "Nicaragua", dial_code: "+505", code: "NI", flag: "๐ณ๐ฎ" },
  { name: "Niger", dial_code: "+227", code: "NE", flag: "๐ณ๐ช" },
  { name: "Nigeria", dial_code: "+234", code: "NG", flag: "๐ณ๐ฌ" },
  { name: "Niue", dial_code: "+683", code: "NU", flag: "๐ณ๐บ" },
  { name: "Norfolk Island", dial_code: "+672", code: "NF", flag: "๐ณ๐ซ" },
  {
    name: "Northern Mariana Islands",
    dial_code: "+1670",
    code: "MP",
    flag: "๐ณ"
  },
  { name: "Norway", dial_code: "+47", code: "NO", flag: "๐ณ๐ด" },
  { name: "Oman", dial_code: "+968", code: "OM", flag: "๐ด๐ฒ" },
  { name: "Pakistan", dial_code: "+92", code: "PK", flag: "๐ต๐ฐ" },
  { name: "Palau", dial_code: "+680", code: "PW", flag: "๐ต๐ผ" },
  {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS",
    flag: "๐ต๐ธ"
  },
  { name: "Panama", dial_code: "+507", code: "PA", flag: "๐ต๐ฆ" },
  {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG",
    flag: "๐ต๐ฌ"
  },
  { name: "Paraguay", dial_code: "+595", code: "PY", flag: "๐ต๐พ" },
  { name: "Peru", dial_code: "+51", code: "PE", flag: "๐ต๐ช" },
  { name: "Philippines", dial_code: "+63", code: "PH", flag: "๐ต๐ญ" },
  { name: "Pitcairn", dial_code: "+64", code: "PN", flag: "๐ต๐ณ" },
  { name: "Poland", dial_code: "+48", code: "PL", flag: "๐ต๐ฑ" },
  { name: "Portugal", dial_code: "+351", code: "PT", flag: "๐ต๐น" },
  { name: "Puerto Rico", dial_code: "+1939", code: "PR", flag: "๐ต๐ท" },
  { name: "Qatar", dial_code: "+974", code: "QA", flag: "๐ถ๐ฆ" },
  { name: "Romania", dial_code: "+40", code: "RO", flag: "๐ท๐ด" },
  { name: "Russia", dial_code: "+7", code: "RU", flag: "๐ท๐บ" },
  { name: "Rwanda", dial_code: "+250", code: "RW", flag: "๐ท๐ผ" },
  { name: "Reunion", dial_code: "+262", code: "RE", flag: "๐ซ๐ท" },
  {
    name: "Saint Barthelemy",
    dial_code: "+590",
    code: "BL",
    flag: "๐ง๐ฑ"
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH",
    flag: "๐ธ๐ญ"
  },
  {
    name: "Saint Kitts and Nevis",
    dial_code: "+1869",
    code: "KN",
    flag: "๐ฐ๐ณ"
  },
  { name: "Saint Lucia", dial_code: "+1758", code: "LC", flag: "๐ฑ๐จ" },
  { name: "Saint Martin", dial_code: "+590", code: "MF", flag: "๐ณ" },
  {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM",
    flag: "๐ต๐ฒ"
  },
  {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1784",
    code: "VC",
    flag: "๐ป๐จ"
  },
  { name: "Samoa", dial_code: "+685", code: "WS", flag: "๐ผ๐ธ" },
  { name: "San Marino", dial_code: "+378", code: "SM", flag: "๐ธ๐ฒ" },
  {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST",
    flag: "๐ธ๐น"
  },
  { name: "Saudi Arabia", dial_code: "+966", code: "SA", flag: "๐ธ๐ฆ" },
  { name: "Senegal", dial_code: "+221", code: "SN", flag: "๐ธ๐ณ" },
  { name: "Serbia", dial_code: "+381", code: "RS", flag: "๐ท๐ธ" },
  { name: "Seychelles", dial_code: "+248", code: "SC", flag: "๐ธ๐จ" },
  { name: "Sierra Leone", dial_code: "+232", code: "SL", flag: "๐ธ๐ฑ" },
  { name: "Singapore", dial_code: "+65", code: "SG", flag: "๐ธ๐ฌ" },
  { name: "Slovakia", dial_code: "+421", code: "SK", flag: "๐ธ๐ฐ" },
  { name: "Slovenia", dial_code: "+386", code: "SI", flag: "๐ธ๐ฎ" },
  {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB",
    flag: "๐ธ๐ง"
  },
  { name: "Somalia", dial_code: "+252", code: "SO", flag: "๐ธ๐ด" },
  { name: "South Africa", dial_code: "+27", code: "ZA", flag: "๐ฟ๐ฆ" },
  { name: "South Sudan", dial_code: "+211", code: "SS", flag: "๐ธ๐ธ" },
  {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS",
    flag: "๐ฌ๐ธ"
  },
  { name: "Spain", dial_code: "+34", code: "ES", flag: "๐ช๐ธ" },
  { name: "Sri Lanka", dial_code: "+94", code: "LK", flag: "๐ฑ๐ฐ" },
  { name: "Sudan", dial_code: "+249", code: "SD", flag: "๐ธ๐ฉ" },
  { name: "Suriname", dial_code: "+597", code: "SR", flag: "๐ธ๐ท" },
  {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ",
    flag: "๐ฉ๐ฐ"
  },
  { name: "Swaziland", dial_code: "+268", code: "SZ", flag: "๐ธ๐ฟ" },
  { name: "Sweden", dial_code: "+46", code: "SE", flag: "๐ธ๐ช" },
  { name: "Switzerland", dial_code: "+41", code: "CH", flag: "๐จ๐ญ" },
  {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY",
    flag: "๐ธ๐พ"
  },
  { name: "Taiwan", dial_code: "+886", code: "TW", flag: "๐น๐ผ" },
  { name: "Tajikistan", dial_code: "+992", code: "TJ", flag: "๐น๐ฏ" },
  {
    name: "Tanzania, United Republic of Tanzania",
    dial_code: "+255",
    code: "TZ",
    flag: "๐น๐ฟ"
  },
  { name: "Thailand", dial_code: "+66", code: "TH", flag: "๐น๐ญ" },
  { name: "Timor-Leste", dial_code: "+670", code: "TL", flag: "๐น๐ฑ" },
  { name: "Togo", dial_code: "+228", code: "TG", flag: "๐น๐ฌ" },
  { name: "Tokelau", dial_code: "+690", code: "TK", flag: "๐น๐ฐ" },
  { name: "Tonga", dial_code: "+676", code: "TO", flag: "๐น๐ด" },
  {
    name: "Trinidad and Tobago",
    dial_code: "+1868",
    code: "TT",
    flag: "๐น๐น"
  },
  { name: "Tunisia", dial_code: "+216", code: "TN", flag: "๐น๐ณ" },
  { name: "Turkey", dial_code: "+90", code: "TR", flag: "๐น๐ท" },
  { name: "Turkmenistan", dial_code: "+993", code: "TM", flag: "๐น๐ฒ" },
  {
    name: "Turks and Caicos Islands",
    dial_code: "+1649",
    code: "TC",
    flag: "๐น๐จ"
  },
  { name: "Tuvalu", dial_code: "+688", code: "TV", flag: "๐น๐ป" },
  { name: "Uganda", dial_code: "+256", code: "UG", flag: "๐บ๐ฌ" },
  { name: "Ukraine", dial_code: "+380", code: "UA", flag: "๐บ๐ฆ" },
  {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE",
    flag: "๐ฆ๐ช"
  },
  { name: "United Kingdom", dial_code: "+44", code: "GB", flag: "๐ฌ๐ง" },
  { name: "United States", dial_code: "+1", code: "US", flag: "๐บ๐ธ" },
  { name: "Uruguay", dial_code: "+598", code: "UY", flag: "๐บ๐พ" },
  { name: "Uzbekistan", dial_code: "+998", code: "UZ", flag: "๐บ๐ฟ" },
  { name: "Vanuatu", dial_code: "+678", code: "VU", flag: "๐ป๐บ" },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dial_code: "+58",
    code: "VE",
    flag: "๐ป๐ช"
  },
  { name: "Vietnam", dial_code: "+84", code: "VN", flag: "๐ป๐ณ" },
  {
    name: "Virgin Islands, British",
    dial_code: "+1284",
    code: "VG",
    flag: "๐ป๐ฌ"
  },
  {
    name: "Virgin Islands, U.S.",
    dial_code: "+1340",
    code: "VI",
    flag: "๐ป๐ฎ"
  },
  {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF",
    flag: "๐ผ๐ซ"
  },
  { name: "Yemen", dial_code: "+967", code: "YE", flag: "๐พ๐ช" },
  { name: "Zambia", dial_code: "+260", code: "ZM", flag: "๐ฟ๐ฒ" },
  { name: "Zimbabwe", dial_code: "+263", code: "ZW", flag: "๐ฟ๐ผ" }
];

export default countries;
