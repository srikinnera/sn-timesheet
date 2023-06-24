import {TotalsContainer} from './styled'
import { TimeSheetForm } from "../../types"

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
        <h1>
            Total Time: {totalTime}
        </h1>
        <h1>
            Total Cost: {totalCost}
        </h1>
        </TotalsContainer>
    )
}