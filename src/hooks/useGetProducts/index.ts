import { useState, useEffect } from "react";
import axios from "axios";
import constants from "constants/";
import type * as Types from "./types";

// for mocking API
const useGetProducts = (props?: Types.Props) => {
  const [loading, setLoading] = useState(true),
    [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!loading) return;
    axios
      .get(constants.url.GETPRODUCTS, {
        params: {
          skip: props?.skip,
          limit: props?.limit,
        },
      })
      .then((res) => {
        setLoading(false);
        setPhotos(res.data.products);
      });
  }, [loading]);

  return { loading, setLoading, photos };
};

export default useGetProducts;
