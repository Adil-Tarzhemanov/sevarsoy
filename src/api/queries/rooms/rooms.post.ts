import {useMutation} from "@tanstack/react-query";
import {instance} from "../../api";
import {queryClient} from "../../../index";

const fetchRoomsData = async (dateValue: any) => {
    try {
        const { data } = await instance.post('api/reservation/check', dateValue);
        return data;
    } catch (error) {
        throw new Error('Failed to rooms');
    }
}

export const useRoomsDataByMutation = (dateValue: any) => {
    return useMutation({
        mutationKey: ['roomsData'],
        mutationFn: () => fetchRoomsData(dateValue),
        // onSuccess: () => queryClient.invalidateQueries()
    })
}