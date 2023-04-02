import * as Types from "types/";

const getSearchParams = (
  keyword: Types.Utils.SearchParams.Keyword,
  selectedCities: Types.Utils.SearchParams.SelectedOptions,
  selectedClassifications: Types.Utils.SearchParams.SelectedOptions
) => {
  const searchParams = new URLSearchParams(),
    searchCities = (() => {
      const cities: string[] = [];

      Object.entries(selectedCities).forEach((pairs) => {
        if (!pairs[1]) return;
        cities.push(pairs[0]);
      });

      return cities;
    })(),
    searchClassifications = (() => {
      const classifications: string[] = [];

      Object.entries(selectedClassifications).forEach((pairs) => {
        if (!pairs[1]) return;
        classifications.push(pairs[0]);
      });

      return classifications;
    })();

  if (keyword) {
    searchParams.append("keyword", keyword);
  }

  if (searchCities.length !== 0) {
    searchParams.append("city", searchCities.join(","));
  }

  if (searchClassifications.length !== 0) {
    searchParams.append("classification", searchClassifications.join(","));
  }

  return searchParams;
};

export { getSearchParams };
