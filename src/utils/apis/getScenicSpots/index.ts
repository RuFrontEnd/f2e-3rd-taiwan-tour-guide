import axios from "axios";
import getAuthorizationHeader from "../initializeAxiosAuthorizationHeader";
import * as constants from "constants/";
import * as variables from "variables/";

const getScenicSpots = async () => {
  // const TDXAccountInfo = {
  //   grant_type: "client_credentials",
  //   client_id: process.env.REACT_APP_CLIENT_ID,
  //   client_secret: process.env.REACT_APP_CLIENT_SECRET,
  // };

  // let res = await axios({
  //   method: constants.apis.GET,
  //   url: variables.urls.getAuthToken,
  //   data: TDXAccountInfo,
  //   headers: getAuthorizationHeader(),
  // });

  // return {
  //   authorization: `Bearer ${res.data.access_token}`,
  // };
};

export default getScenicSpots;
