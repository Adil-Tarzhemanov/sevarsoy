import { useQuery } from "@tanstack/react-query";
import { instance } from "../../api";

const fetchNewsData = async () => {
  try {
    const { data } = await instance.get(`api/admin/news`);
    return data;
  } catch (error) {
    throw new Error("Failed to news");
  }
};

export const useNewsDataByQuery = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: () => fetchNewsData(),
  });
};
