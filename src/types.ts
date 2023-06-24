import { Dayjs } from "dayjs";

export type TimeSheetFormInput = {
    Date: unknown;
    Time: Dayjs | null;
}

export type TimeSheetForm = {
    TimesheetForm: TimeSheetFormInput[];
}