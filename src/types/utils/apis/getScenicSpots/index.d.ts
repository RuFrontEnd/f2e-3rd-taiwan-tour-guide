type ResDataItem = {
  Address: string;
  Description: string;
  OpenTime: string;
  Phone: string;
  Picture: {
    PictureUrl1: string;
  };
  ScenicSpotName: string;
};

type Res = {
  data: ResDataItem[];
};

export type { ResDataItem, Res };
