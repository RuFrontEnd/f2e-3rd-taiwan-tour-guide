type ResDataItem = {
  Address: string;
  Description: string;
  OpenTime: string;
  Phone: string;
  Picture: {
    PictureUrl1: string;
  };
  ScenicSpotName: string;
  class1: undefined | string;
  class2: undefined | string;
  class3: undefined | string;
};

type Res = {
  data: ResDataItem[];
};

export type { ResDataItem, Res };
