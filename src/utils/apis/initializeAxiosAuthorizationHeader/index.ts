import axios from "axios";
import * as constants from "constants/";
import * as variables from "variables/";

const initializeAxiosAuthorizationHeader = async () => {
  const TDXAccountInfo = {
    grant_type: "client_credentials",
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
  };

  let res = await axios({
    method: constants.apis.POST,
    url: variables.urls.getAuthToken,
    data: TDXAccountInfo,
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });

  axios.defaults.headers.authorization = `Bearer ${res.data.access_token}`;
};

export default initializeAxiosAuthorizationHeader;
