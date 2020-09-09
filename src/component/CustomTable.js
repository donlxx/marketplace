import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
});


export const CustomTable =(props) => {
    const classes = useStyles();
    const rows=props.date;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" colSpan={3}>
                            {props.desc}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="left" style={{backgroundColor:'grey', color: 'white', width: '20%'}}>{row.name}</TableCell>
                            <TableCell align="right" style={{width: '20%'}} >{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
