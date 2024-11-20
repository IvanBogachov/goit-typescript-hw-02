import axios, { AxiosResponse } from "axios";
import { FetchGalleryPhotosResponse } from "../components/types";

//Application ID 662627
//Access Key YBzUbl2tTOkfgdGM9JSmQG1eK-anAa2YLCXfIO0kRZE

const ACCESS_KEY = "YBzUbl2tTOkfgdGM9JSmQG1eK-anAa2YLCXfIO0kRZE";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.headers.common["Accept-Version"] = "v1";
axios.defaults.params = {
  per_page: 9,
  orientation: "landscape",
};

const fetchGalleryPhotos = async (
  query: string,
  page: number
): Promise<FetchGalleryPhotosResponse> => {
  const response: AxiosResponse<FetchGalleryPhotosResponse> = await axios.get(
    "/search/photos",
    {
      params: {
        query,
        page,
      },
    }
  );

  return response.data;
};

export default fetchGalleryPhotos;
