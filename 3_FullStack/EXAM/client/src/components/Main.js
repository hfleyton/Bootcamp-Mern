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
import getMovies from '../actions/getMovies'
import logoutUser from '../actions/postLogoutUser'


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
    const [title, setTitle] = useState([]);


    useEffect(() => {
        const getmovimientos = async () => {
        const { success, data} = await getMovies();
        if (success) {
            setMovs(data.allMovies)
        }
      };
    getmovimientos();
  }, []);

  const addReviews = (title) => {
    window.localStorage.setItem('title',title)
    history.push("/addreview")
  }


  const readReviews= (title) => {
      window.localStorage.setItem('title',title)
      history.push("/readreviews")
  }


  const addMovie = () =>{
    history.push("/addMovie")
  }

  const cerrar = () => {
    logoutUser({});
    history.push("/")
    window.localStorage.clear();
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
      <Button
        type="submit"
        variant="contained"
        color="primary"
        align="right"
        className={classes.submit}
        onClick={addMovie}
      >
       Add Movie
      </Button>
      <h3>Movie List:</h3>
      <TableContainer component={Paper}>
      <Table size="small" >
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Movie Title</StyledTableCell>
            <StyledTableCell>Rating</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {movs.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell>{row.title}</StyledTableCell>
              <StyledTableCell>{row.rating}</StyledTableCell>
              <StyledTableCell>
                <Button 
                  value={row.title}
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={(e) => {readReviews(row.title)}}
                  >Read Reviews
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={(e) => {addReviews(row.title)}}
                  >Write a Reviews
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </React.Fragment>
  );
}