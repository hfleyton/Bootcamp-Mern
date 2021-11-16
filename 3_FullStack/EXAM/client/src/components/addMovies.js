import React, { useEffect, useState } from 'react';
import { withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import logoutUser from '../actions/postLogoutUser'
import addMovie from '../actions/postCreateMovie'


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

    const onSubmit = async (e) => {
      e.preventDefault();
      const form = e.target.closest('form');
      const formData = new FormData(form);
      const arr = {}
      for (const [key, value] of formData.entries()) arr[key] = value;
      const payload = {
        "title" : arr.title,
        "reviews" : {
            "reviewerEmail": (window.localStorage.getItem('email')),
            "review" : arr.review,
            "rating" :  parseInt(arr.rating)
            }
    }   
      console.log(payload)
      const { success, data } = await addMovie (payload);
      if (success) {
          alert(data.mensaje);
          form.querySelectorAll('input').forEach((input) => (input.value = ''),);
          history.push("/main")
      }
      else {
          alert(data[0].message);
      }
  }

  const cancelar = () => {
    history.push("/main")
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
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Movie
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="title"
            label="title" 
            type="text"
            id="title"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="rating"
            label="rating"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            multiline
            required
            fullWidth
            name="review"
            label="review"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Aceptar
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={cancelar}

          >
            Cancelar
          </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    </React.Fragment>
  );
}
