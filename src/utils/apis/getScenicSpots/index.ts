import axios from "axios";
import * as Types from "types/";
import * as constants from "constants/";
import * as variables from "variables/";

const getScenicSpots = (
  params: Types.Utils.Apis.Get.Params,
  handleThen: Types.Utils.Apis.Get.HandleThen,
  handleBeforeFetch?: Types.Utils.Apis.Get.HandleBeforeFetch,
  handleError?: Types.Utils.Apis.Get.HandleError,
  handleFinal?: Types.Utils.Apis.Get.HandleFinal
) => {
  handleBeforeFetch && handleBeforeFetch();

  axios({
    method: constants.apis.GET,
    url: variables.urls.getScenicSpots,
    params: params,
  })
    .then((res: Types.Utils.Apis.GetScenicSpots.Res) => {
      handleThen && handleThen(res);
    })
    .catch((error) => {
      handleError && handleError(error);
    })
    .finally(() => {
      handleFinal && handleFinal();
    });
};

export default getScenicSpots;
