import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { ControllerRenderProps } from 'react-hook-form';
import { TimePickerContainer } from './styled'
import { TimeSheetForm } from '../../types';

export const TimePicker = ({field}: {field: ControllerRenderProps<TimeSheetForm, `timesheetForm.${number}.time`>}):JSX.Element => {
    return (
        <TimePickerContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeField
                {...field}
                label="Time"
                onChange={(value) => {
                    field.onChange(value);
                 }
                }
                format="mm"
            />
        </LocalizationProvider>
        </TimePickerContainer>
    )
}