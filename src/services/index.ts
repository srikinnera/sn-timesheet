import { Dayjs } from 'dayjs';
import {TimeSheetResponseType} from '../types';

export const fetchTimesheets = async(id: number, date: Dayjs):Promise<TimeSheetResponseType[]> => {
        const dateToFetch = date.toISOString().slice(0,19);
        const response = await fetch(`http://localhost:8080/timesheets/${id}/${dateToFetch}`, {method : 'GET'})
        if(!response?.ok) throw new Error(response.statusText);
        console.log('response', response);
        return response.json() as Promise<TimeSheetResponseType[]>;
}