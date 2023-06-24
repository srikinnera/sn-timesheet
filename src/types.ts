import { Dayjs } from "dayjs";

export type TimeSheetFormInput = {
    Date: unknown;
    Time: Dayjs | null;
    Rate: number | null;
}

export type TimeSheetForm = {
    TimesheetForm: TimeSheetFormInput[];
}