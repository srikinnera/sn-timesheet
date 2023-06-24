import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { RateContainer } from './styled';


export const Rate = ({field}: {field: any}):JSX.Element => {
    return(
        <RateContainer>
             <TextField
                id="rate-field"
                label="Rate"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    let amount = parseInt(event.target.value);
                    if(!amount || (amount && amount > 0)){
                        field.onChange(amount);
                    }
                }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                type='number'
            />
        </RateContainer>
    )
}