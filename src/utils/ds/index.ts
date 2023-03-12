import * as Types from "types/";
import noImg from "assets/picture/noImg.png";

const generateScenicSpotsDS: (
  resData: Types.Utils.Apis.GetScenicSpots.Res["data"]
) => Types.Utils.DS.GenerateScenicSpotsDS = (resData) => {
  return resData.map(
    (resDataItem: Types.Utils.Apis.GetScenicSpots.ResDataItem) => {
      const _classes = (() => {
        const classes = [];

        const class1 = resDataItem?.Class1,
          class2 = resDataItem?.Class2,
          class3 = resDataItem?.Class3;

        if (class1) {
          classes.push(class1);
        }

        if (class2) {
          classes.push(class2);
        }

        if (class3) {
          classes.push(class3);
        }

        return classes;
      })();

      return {
        photo: resDataItem.Picture.PictureUrl1
          ? resDataItem.Picture.PictureUrl1
          : noImg,
        title: resDataItem.ScenicSpotName,
        address: resDataItem.Address ? resDataItem.Address : "無",
        phone: resDataItem.Phone ? resDataItem.Phone : "無",
        time: resDataItem.OpenTime ? resDataItem.OpenTime : "無",
        info: resDataItem.Description,
        classes: _classes,
      };
    }
  );
};

export { generateScenicSpotsDS };
