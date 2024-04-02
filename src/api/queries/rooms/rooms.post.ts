import { useMutation } from "@tanstack/react-query";
import { instance } from "../../api";
import { getNumbersInfo } from "../../../store/slices/rangePicker.slice";
import { reservNumbers } from "../../../constants/reservation/reservNumbers";

const fetchRoomsData = async (dateValue: any) => {
  try {
    const { data } = await instance.post("api/reservation/check", dateValue);
    return data;
  } catch (error) {
    throw new Error("Failed to rooms");
  }
};

export const useRoomsDataByMutation = (
  dateValue: any,
  navigate: any,
  dispatch: any,
) => {
  return useMutation({
    mutationKey: ["roomsData"],
    mutationFn: () => fetchRoomsData(dateValue),
    onSuccess: (res) => {
      navigate("/api/reservation/check");
      dispatch(
        getNumbersInfo({
          ...res,
          data: res.data.map((number: any, index: number) => {
            return {
              ...number,
              imgs: reservNumbers[index].imgs,
              count: reservNumbers[index].count,
            };
          }),
        }),
      );
      console.log(res);
    },
  });
};
