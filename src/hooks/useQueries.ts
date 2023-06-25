import { Dayjs } from "dayjs";
import { UseQueryResult, useQuery } from "react-query";
import { fetchTimesheets, saveTimesheet } from "../services";
import { TimeSheetResponseType, PostTimeSheetType, TimeSheetForm } from '../types';

export const useGetTimesheets = (id:number, date: Dayjs):UseQueryResult<TimeSheetResponseType[]|undefined> => {
    return useQuery(['timesheets', date], () => fetchTimesheets(id, date));
}