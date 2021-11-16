import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import postCreateUser from '../actions/postCreateUser';

const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    const formData = new FormData(form);
    const payload = {};
    for (const [key, value] of formData.entries()) payload[key] = value;
    const passwordsMatch = payload.password === payload.confirmPassword;
    if (passwordsMatch) {
        const { success, data } = await postCreateUser(payload);
        if (success) {
            alert(data.mensaje);
            form.querySelectorAll('input').forEach((input) => (input.value = ''),);
        }
        else {
            //alert('Usuario Registrado anteriormente');
              alert(data[0].message)
          }
    } else {
        alert('La contraseña no coincide');
    }
}

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrar Usuario
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="email"
                autoFocus
              />
              </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="firstName"
                name="firstName"
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="lastName"
                name="lastName"
              />
              </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmar Password"
                type="password"
                id="confirmPassword"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Usted ya esta registrado? Ingrese aquí
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}