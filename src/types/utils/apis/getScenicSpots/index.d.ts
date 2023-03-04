type ResDataItem = {
  Address: string;
  Description: string;
  OpenTime: string;
  Phone: string;
  Picture: {
    PictureUrl1: string;
  };
  ScenicSpotName: string;
  Class1: undefined | string;
  Class2: undefined | string;
  Class3: undefined | string;
};

type Res = {
  data: ResDataItem[];
};

export type { ResDataItem, Res };
