import {TotalsContainer} from './styled'
import { TimeSheetForm } from "../../types"
import { Typography } from '@mui/material';

export const TotalsFooter = ({values, rate}: {values: TimeSheetForm, rate:number}):JSX.Element => {
    const {timesheetForm} = values;
    
    let totalTime = timesheetForm.reduce((prev, curr) => {
        let time = curr.time;
        if(time)
            return prev + time.get('minute');
        return prev
    }, 0);

    let totalCost = rate ? rate * totalTime: 0;

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