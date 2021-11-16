import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import postTransferencia from '../actions/postTrasnferencia';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  Button: {
    alignItems: 'center',
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    const formData = new FormData(form);
    const movimiento = {}
    for (const [key, value] of formData.entries()) movimiento[key] = value;
    const payload = {
      "rutOrigen": window.localStorage.getItem('rut'),
      "rutDestino": movimiento.rutDestino,
      "movimiento" : {
          "monto" : parseInt(movimiento.monto),
          "operacion" : "transferencia"
      }
        }
    console.log(payload)
    const { data } = await postTransferencia (payload);
    if (data.status === "OK"){
        alert(data.mensaje);
        form.querySelectorAll('input').forEach((input) => (input.value = ''),);
        history.push("/main")
    }
    else {
        alert(data.mensaje);
    }
}


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Transferencia
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="rutDestino"
            label="ingrese el RUT del destinatario" 
            type="text"
            id="rutDestino"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="monto"
            label="Monto"
            type="number"
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
            Transferir
          </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}