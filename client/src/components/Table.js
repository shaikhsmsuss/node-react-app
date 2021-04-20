import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
  root: {
    backgroundColor: "#181818",
    color: "white",
  },
  body: {
    backgroundColor: "#282828",
  },
  head: {
    color: "white",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function BasicTable({ rows }) {
  console.log("looo", rows);
  const classes = useStyles();
  const history = useHistory();

  const onClick = (row) => {
    console.log("working", row);
    history.push({
      pathname: "/addproduct",
      row,
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.root}>
          <TableRow>
            <TableCell className={classes.head}>Name</TableCell>
            <TableCell className={classes.head}>Description</TableCell>
            <TableCell className={classes.head}>Price</TableCell>
            <TableCell className={classes.head}> Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.body}>
          {rows.map((row) => (
            <TableRow key={row.name} onClick={() => onClick(row)}>
              <TableCell component="th" scope="row" className={classes.head}>
                {row.name}
              </TableCell>

              <TableCell component="th" scope="row" className={classes.head}>
                {row.description}
              </TableCell>
              <TableCell component="th" scope="row" className={classes.head}>
                {row.price}
              </TableCell>
              <TableCell component="th" scope="row" className={classes.head}>
                <DeleteIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
