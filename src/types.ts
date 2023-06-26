import { Dayjs } from "dayjs";

export type TimeSheetFormInput = {
    date: unknown;
    time: Dayjs | null;
}

export type TimeSheetFormOutput = {
    date: unknown;
    time: number;
}


export type TimeSheetForm = {
    timesheetForm: TimeSheetFormInput[];
}

export type TimeSheetResponseType = {
    id: number;
    user_id: number;
    rate: number;
    description: string;
    date: string;
    time: string;
}

export type PostTimeSheetType = {
    rate: number;
    description: string;
    user_id: number;
    timesheetForm: TimeSheetFormOutput[];
}

export type UserInfoType = {
    email: string;
    password: string;
}

export type AccessTokenObj = {
    access_token: string;
}