import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DateComponent } from '@mui/x-date-pickers/DatePicker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetTimesheets } from "../../hooks/useQueries";
import { DateContainer } from "./styled"

export const ViewTimesheet = ():JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
    const { data } = useGetTimesheets(1, selectedDate); 
    const rows = data || []
    return (
      <>
      <DateContainer>
        <h2>Timesheet of date: </h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateComponent label="Date" value={selectedDate} onChange={(value: Dayjs|null) => {if(value) setSelectedDate(value)}} />
        </LocalizationProvider>
      </DateContainer>
      {rows.length ? 
        (
          <TableContainer component={Paper}>
            <h1>Timesheets</h1>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell align="right">Rate</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Time(minutes)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.description}
                  </TableCell>
                  <TableCell align="right">{`$${row.rate}`}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        ): null
      }
    </>
  )
}

export default ViewTimesheet;