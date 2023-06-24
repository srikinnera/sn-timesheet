import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DateComponent } from '@mui/x-date-pickers/DatePicker';
import {DatePickerContainer} from './styled'

export const DatePicker = ({field}: {field: any}):JSX.Element => {
    return (
        <DatePickerContainer>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateComponent label="Date" onChange={(value) => field.onChange(value)}/>
            </LocalizationProvider>
        </DatePickerContainer>
    )
}