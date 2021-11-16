import React, { useEffect, useState } from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import getMovimientos from '../actions/getMovimientos'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import { useHistory } from 'react-router-dom';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


export default function Orders() {

  const history = useHistory();
  const classes = useStyles();

    const [movs, setMovs] = useState([]);
    const [saldo, setSaldo] = useState([]);
    const [nombre, setNombre] = useState([]);


    useEffect(() => {
        const getmovimientos = async () => {
            const payload = {
              "rut": window.localStorage.getItem('rut')
            };
        const { success, data} = await getMovimientos(payload);
        if (success) {
            setMovs(data.ultimosMovimientos)
            setSaldo(data.saldo)
            setNombre(data.fullName)
        }
      };
    getmovimientos();
  }, []);

  const depositar = () => {
    history.push("/abonoretiro")
  }

  const transferir = () => {
    history.push("/transferencia")
  }

  const cerrar = () => {
    history.push("/")
    window.localStorage.clear();
  }

  return (
    <React.Fragment>
      <div align="right">
      <h2>Hola {nombre}</h2>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        align="right"
        className={classes.submit}
        onClick={cerrar}
      >
       Cerrar Sesion
      </Button>
      </div>
      <h2>Tu Saldo es : ${saldo}</h2>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={depositar}
      >
        Depositar
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={depositar}
      >
        Retirar
      </Button><Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={transferir}
      >
        Transferir
      </Button>
      <h3>Tus Ultimos 10 Movimientos son:</h3>
      <TableContainer component={Paper}>
      <Table size="small" >
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Monto</StyledTableCell>
            <StyledTableCell>Operacion</StyledTableCell>
            <StyledTableCell>Balance</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {movs.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell>{row.monto}</StyledTableCell>
              <StyledTableCell>{row.operacion}</StyledTableCell>
              <StyledTableCell>{row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </React.Fragment>
  );
}