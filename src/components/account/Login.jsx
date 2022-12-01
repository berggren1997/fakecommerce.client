import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { shades } from "../../theme";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/user/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // parameter data is FieldValues from React-Hook-Form
  const submitForm = async (data) => {
    await dispatch(userLogin(data));
    navigate("/products");
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: shades.primary[400] }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(submitForm)}>
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            autoFocus
            {...register("username", { required: "username is required" })}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            {...register("password", { required: "password is required" })}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: shades.primary[400],
              color: "white",
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
