import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DateComponent } from '@mui/x-date-pickers/DatePicker';
import { ControllerRenderProps } from 'react-hook-form';
import {DatePickerContainer} from './styled'
import { TimeSheetForm } from '../../types';

export const DatePicker = ({field}: {field: ControllerRenderProps<TimeSheetForm, `timesheetForm.${number}.date`>}):JSX.Element => {
    return (
        <DatePickerContainer>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateComponent label="Date" onChange={(value) => field.onChange(value)} data-testid="date-picker" />
            </LocalizationProvider>
        </DatePickerContainer>
    )
}