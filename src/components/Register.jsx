import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Register() {
  return (
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        mt: 12,
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField margin="normal" fullWidth label="Username" />
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          autoComplete="email"
        />
        <TextField margin="normal" fullWidth label="Password" type="password" />
        <Button
          fullWidth
          variant="contained"
          sx={{ width: "100%", height: 45, mb: 2 }}
        >
          Register
        </Button>
        <Grid container>
          <Grid item>
            <Typography>Already have an account?</Typography>
            <Link to="/login">{"Sign In"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
