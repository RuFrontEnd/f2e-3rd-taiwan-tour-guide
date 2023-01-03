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
        // TODO: 測試 infinite scroll 用
        console.log("res", res);
        setLoading(false);
        setPhotos(res.data.products);
        // TODO: 之後要 set response 進 photos state
      });
  }, [loading]);

  return { loading, setLoading, photos };
};

export default useGetProducts;
