import { Dayjs } from "dayjs";
import { UseQueryResult, useQuery } from "react-query";
import { fetchTimesheets } from "../services";
import { TimeSheetResponseType } from '../types';

export const useGetTimesheets = (id:number, date: Dayjs):UseQueryResult<TimeSheetResponseType[]|undefined> => {
    return useQuery(['timesheets', date], () => fetchTimesheets(id, date));
}