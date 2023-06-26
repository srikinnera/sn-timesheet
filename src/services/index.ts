import { Dayjs } from 'dayjs';
import {TimeSheetResponseType, PostTimeSheetType, UserInfoType, AccessTokenObj} from '../types';

export const fetchTimesheets = async(id: number, date: Dayjs):Promise<TimeSheetResponseType[]> => {
        const dateToFetch = date.format("YYYY-MM-DD");
        console.log('date', dateToFetch);
        const response = await fetch(`http://54.183.80.214:8080/timesheets/${id}/${dateToFetch}`, {method : 'GET'})
        if(!response?.ok) throw new Error(response.statusText);
        return response.json() as Promise<TimeSheetResponseType[]>;
}

export const saveTimesheet = async(data: PostTimeSheetType):Promise<Response> => {
        return await fetch(`http://54.183.80.214:8080/timesheets`, {
                method : 'POST', 
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
        });
}

export const loginUser = async(userObj: UserInfoType):Promise<AccessTokenObj> =>{
        const response = await fetch(`http://54.183.80.214:8080/auth/login`, {
                method : 'POST', 
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify(userObj)
        });
        if(!response?.ok) throw new Error(response.statusText);
        return response.json() as Promise<AccessTokenObj>
}