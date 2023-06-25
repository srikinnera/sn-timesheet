import { Dayjs } from 'dayjs';
import {TimeSheetResponseType, PostTimeSheetType} from '../types';

export const fetchTimesheets = async(id: number, date: Dayjs):Promise<TimeSheetResponseType[]> => {
        const dateToFetch = date.format("YYYY-MM-DD");
        const response = await fetch(`http://localhost:8080/timesheets/${id}/${dateToFetch}`, {method : 'GET'})
        if(!response?.ok) throw new Error(response.statusText);
        return response.json() as Promise<TimeSheetResponseType[]>;
}

export const saveTimesheet = async(data: PostTimeSheetType):Promise<Response> => {
        return await fetch(`http://localhost:8080/timesheets`, {
                method : 'POST', 
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
        });
}