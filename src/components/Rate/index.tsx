import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { RateContainer } from './styled';

export const Rate = ({handleRateChange}: {handleRateChange: (amount:number) => void}):JSX.Element => {
    return(
        <RateContainer>
             <TextField
                id="rate-field"
                label="Rate"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    let amount = parseInt(event.target.value);
                    if(!amount || (amount && amount > 0)){
                        handleRateChange(amount);
                    }
                }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}
                type='number'
            />
        </RateContainer>
    )
}