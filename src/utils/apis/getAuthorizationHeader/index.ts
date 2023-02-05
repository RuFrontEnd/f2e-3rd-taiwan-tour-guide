import axios from "axios";
import * as variables from "variables/";

const getAuthorizationHeader = async () => {
  const TDXAccountInfo = {
    grant_type: "client_credentials",
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
  };

  let res = await axios({
    method: "POST",
    url: variables.urls.getAuthToken,
    data: TDXAccountInfo,
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });

  return {
    authorization: `Bearer ${res.data.access_token}`,
  };
};

export default getAuthorizationHeader;
