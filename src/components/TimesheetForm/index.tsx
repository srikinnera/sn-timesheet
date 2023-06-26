import React from 'react';
import {useQueryClient, useMutation} from 'react-query'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import { useForm, Controller, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DatePicker } from "../DatePicker";
import { Rate } from "../Rate";
import { TimePicker } from "../TimePicker"
import { TotalsFooter } from '../TotalsFooter';
import {Row, FormContainer, SubmitButton, Form, FormItem, ErrorMessage, FormElements} from './styled';
import {TimeSheetForm } from '../../types';
import { saveTimesheet } from '../../services';


export const TimesheetForm = ():JSX.Element => {
    const [description, setDescription] = useState<string>('My Timesheet');
    const [rate, setRate] = useState<number>(0);
    const [openSnackbar, setSnackbar] = useState<boolean>(false);
    const queryClient = useQueryClient();
    const schema = z.object({
        timesheetForm: z.array(z.object({
            date: z.instanceof(dayjs as unknown as typeof Dayjs, {message: 'Enter date in correct format'}),
            time: z.instanceof(dayjs as unknown as typeof Dayjs, {message: 'Enter time in minutes'}),
        }))
    })
    const { handleSubmit, control, formState: { errors }, watch, reset } = useForm<TimeSheetForm>({resolver: zodResolver(schema) ,defaultValues: {timesheetForm: [{date: {}, time: null}]}})
    const {fields, append, remove} = useFieldArray({
        control,
        name: "timesheetForm"
    })

    const watchAllFields = watch();
    
    const { mutate } = useMutation(saveTimesheet, {
        onSuccess: data => {
           console.log(data);
           setSnackbar(true);
           reset();
           setRate(0);
           setDescription('');
     },
       onError: () => {
            alert("there was an error")
     },
       onSettled: () => {
          queryClient.invalidateQueries('create')
     }
     });

    const postFormData = (data: TimeSheetForm) => {
        const timesheetForm = data.timesheetForm.map(row => ({...row, time: row.time?.get('minute') || 0}))
        const submitData = {
            rate,
            description,
            user_id: 1, 
            timesheetForm
        };
        mutate(submitData);
    }

    const handleRateChange = (amount:number) => {
        setRate(amount);
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackbar(false);
      };

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
      ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    return(
        <FormContainer>
             <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Timesheet saved successfully!
                </Alert>
            </Snackbar>
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
                <Form onSubmit={handleSubmit((data: any) => postFormData(data))}>
                    {fields.map((item, index) => {
                        const errorObj = errors && errors.timesheetForm ? errors.timesheetForm[0] : {};
                        return (
                        <Row key={item.id}>
                            <Controller
                                control={control}
                                name={`timesheetForm.${index}.date`}
                                render={({field}) => (
                                <FormItem>
                                    <DatePicker field={field} />
                                    <ErrorMessage>{errorObj?.date?.message}</ErrorMessage>
                                </FormItem>
                                )}
                            />
                            <Controller
                                control={control}
                                name={`timesheetForm.${index}.time`}
                                render={({field}) => (
                                    <FormItem>
                                        <TimePicker field={field} />
                                        <ErrorMessage>{errorObj?.time?.message}</ErrorMessage>
                                </FormItem>
                                )}
                            />
                                <IconButton aria-label="delete" onClick={() => {if(index > 0) remove(index)}}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label="add" onClick={() => append({date:{}, time:null})}>
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