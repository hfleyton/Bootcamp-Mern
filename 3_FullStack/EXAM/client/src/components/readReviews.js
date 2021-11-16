import React, { useEffect, useState } from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import { useHistory } from 'react-router-dom';
import getReviews from '../actions/postreadReviews'
import logoutUser from '../actions/postLogoutUser'
import deleteMovie from '../actions/deleteMovies'


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
    let reviewerOK = false;

    const email = window.localStorage.getItem('email');

    useEffect(() => {
        const getreviews = async () => {
          const payload = {
            "title": window.localStorage.getItem('title')
          };
          const { success, data }= await getReviews(payload);
          if (success) {
            setMovs(data.reviews)
          }
        };
      getreviews();
    }, []);


  const cerrar = () => {
    logoutUser({});
    history.push("/")
    window.localStorage.clear();
  }

  const eliminar = async() => {
    const payload = {
      "title" : (window.localStorage.getItem('title'))
    }
    console.log(payload)
    const { data } = await deleteMovie (payload);
    if (data.status === "OK") {
      alert(data.mensaje);
      history.push("/main")
    }
    else {
      alert(data.mensaje);
    }
  }

  const evalua= (x) =>{
    if(x === reviewerOK){
      reviewerOK = true
    }
    console.log("evalua")
  }

  let buttonDelete;

  if(reviewerOK){
    buttonDelete=<Button type="submit" variant="contained" color="primary" className={classes.submit} onClick={eliminar}>Eliminar</Button>
  }else{
    buttonDelete=<></>
  }

  return (
    <React.Fragment>
      <div align="right">
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
      <h2>{window.localStorage.getItem('firstName')} {window.localStorage.getItem('lastName')}</h2>
      <h3>Reviews for {window.localStorage.getItem('title')}</h3>
      <TableContainer component={Paper}>
      <Table size="small" >
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Reviewer</StyledTableCell>
            <StyledTableCell>Rating</StyledTableCell>
            <StyledTableCell>Review</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {movs.map((row) => ( 
            <StyledTableRow key={row._id} >
              <StyledTableCell>{row.reviewerEmail}&nbsp;&nbsp;&nbsp;&nbsp;{buttonDelete}</StyledTableCell>
              <StyledTableCell>{row.rating}</StyledTableCell>
              <StyledTableCell>{row.review}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        align="right"
        className={classes.submit}
        onClick={eliminar}
      >
       Eliminar Pelicula
      </Button>
    </React.Fragment>
  );
}