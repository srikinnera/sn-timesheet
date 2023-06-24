import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { TimePickerContainer } from './styled'

export const TimePicker = ({field}: {field: any}):JSX.Element => {
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
                format="mm:ss"
            />
        </LocalizationProvider>
        </TimePickerContainer>
    )
}