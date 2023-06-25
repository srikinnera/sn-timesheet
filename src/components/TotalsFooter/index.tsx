import {TotalsContainer} from './styled'
import { TimeSheetForm } from "../../types"
import { Typography } from '@mui/material';

export const TotalsFooter = ({values, rate}: {values: TimeSheetForm, rate:number}):JSX.Element => {
    const {TimesheetForm} = values;
    
    let totalTime = TimesheetForm.reduce((prev, curr) => {
        let time = curr.Time;
        if(time)
            return prev + time.get('minute');
        return prev
    }, 0);

    let totalCost = rate * totalTime;

    return (
        <TotalsContainer>
        <Typography sx={{ fontSize: 24 }}>
            Total Time: {totalTime}
        </Typography>
        <Typography sx={{ fontSize: 24 }}>
            Total Cost: {totalCost}
        </Typography>
        </TotalsContainer>
    )
}