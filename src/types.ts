import { Dayjs } from "dayjs";

export type TimeSheetFormInput = {
    Date: unknown;
    Time: Dayjs | null;
}

export type TimeSheetForm = {
    TimesheetForm: TimeSheetFormInput[];
}

export type TimeSheetResponseType = {
    id: number;
    user_id: string;
    date: string;
    time: string;
    rate: number;
    description: string;
}