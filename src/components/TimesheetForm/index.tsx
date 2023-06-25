import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import { useForm, Controller, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DatePicker } from "../DatePicker";
import { Rate } from "../Rate";
import { TimePicker } from "../TimePicker"
import { TotalsFooter } from '../TotalsFooter';
import {Row, FormContainer, SubmitButton, Form, FormItem, ErrorMessage, FormElements} from './styled';
import {TimeSheetForm} from '../../types';


export const TimesheetForm = ():JSX.Element => {
    const [description, setDescription] = useState<string>('');
    const [rate, setRate] = useState<number>(0);

    const schema = z.object({
        TimesheetForm: z.array(z.object({
            Date: z.instanceof(dayjs as unknown as typeof Dayjs, {message: 'Enter date in correct format'}),
            Time: z.instanceof(dayjs as unknown as typeof Dayjs, {message: 'Enter time in minutes'}),
            Rate: z.number({
                required_error: "Rate is required",
                invalid_type_error: "Rate must be a number",
            }).positive()
        }))
    })
    const { handleSubmit, control, formState: { errors }, watch } = useForm<TimeSheetForm>({resolver: zodResolver(schema) ,defaultValues: {TimesheetForm: [{Date: {}, Time: null}]}})
    const {fields, append, remove} = useFieldArray({
        control,
        name: "TimesheetForm"
    })

    const watchAllFields = watch();

    const handleRateChange = (amount:number) => {
        setRate(amount);
    }

    useEffect(() => {
        const subscription = watch((value, { name, type }) => console.log(value, name, type));
        return () => subscription.unsubscribe();
    }, [watch])

    return(
        <FormContainer>
        <h1>Timesheet</h1>
        <FormElements>
        <TextField
                id="description"
                label="Description"
                value={description}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setDescription(event?.target.value)}}
                style={{'margin': '10px 0 0 0'}}
        />
        <Rate handleRateChange={handleRateChange} />
        </FormElements>
        <Card>
        <Form onSubmit={handleSubmit((data: any) => console.log(data))}>
            {fields.map((item, index) => {
                const errorObj = errors && errors.TimesheetForm ? errors.TimesheetForm[0] : {};
                return (
                <Row key={item.id}>
                    <Controller
                        control={control}
                        name={`TimesheetForm.${index}.Date`}
                        render={({field}) => (
                        <FormItem>
                            <DatePicker field={field} />
                            <ErrorMessage>{errorObj?.Date?.message}</ErrorMessage>
                        </FormItem>
                        )}
                    />
                    <Controller
                        control={control}
                        name={`TimesheetForm.${index}.Time`}
                        render={({field}) => (
                            <FormItem>
                                <TimePicker field={field} />
                                <ErrorMessage>{errorObj?.Time?.message}</ErrorMessage>
                        </FormItem>
                        )}
                    />
                        <IconButton aria-label="delete" onClick={() => {if(index > 0) remove(index)}}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="add" onClick={() => append({Date:{}, Time:null})}>
                            <AddIcon />
                        </IconButton>
                </Row>
            )}
        )}
        <SubmitButton type="submit">Save</SubmitButton>
      </Form>
      </Card>
        <TotalsFooter values={watchAllFields} rate={rate}/>
      </FormContainer>
    )
}