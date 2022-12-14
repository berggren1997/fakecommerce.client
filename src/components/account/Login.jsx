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
  const submitForm = (data) => {
    dispatch(userLogin(data));
    navigate("/");
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="bg-white w-96 h-auto p-12 rounded shadow-sm mb-4">
          <div className="flex items-center justify-center mb-4">
            <p>Sign in</p>
          </div>
          <label className="text-gray-700">Username</label>
          <input
            autoFocus
            {...register("username", { required: "username is required" })}
            className="w-full py-2 px-2 bg-gray-100 rounded-md mx-auto text-gray-500 outline-none focus:outline-none mb-4"
            type="text"
          />

          <label className="text-gray-700">Password</label>
          <input
            {...register("password", { required: "password is required" })}
            className="w-full py-2 px-2 bg-gray-100 rounded-md text-gray-500 focus:outline-none mb-4"
            type="password"
          />

          <button className="button w-full my-4">Sign in</button>
        </div>
      </form>
      <div className="items-center w-48">
        <p className="text-center text-gray-700 italic">New here?</p>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="button w-full mt-4"
        >
          Create an account
        </button>
      </div>
    </div>
    // <Container component="main" maxWidth="xs">
    //   {/* <CssBaseline /> */}
    //   <Box
    //     sx={{
    //       marginTop: 8,
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Avatar sx={{ m: 1, bgcolor: shades.primary[400] }}>
    //       <LockOutlinedIcon />
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Sign in
    //     </Typography>
    //     <Box component="form" onSubmit={handleSubmit(submitForm)}>
    //       <TextField
    //         margin="normal"
    //         fullWidth
    //         label="Username"
    //         autoFocus
    //         {...register("username", { required: "username is required" })}
    //       />
    //       <TextField
    //         margin="normal"
    //         fullWidth
    //         label="Password"
    //         type="password"
    //         {...register("password", { required: "password is required" })}
    //       />
    //       <Button
    //         type="submit"
    //         fullWidth
    //         sx={{
    //           mt: 3,
    //           mb: 2,
    //           backgroundColor: shades.primary[400],
    //           color: "white",
    //         }}
    //       >
    //         Sign In
    //       </Button>
    //       <Grid container>
    //         <Grid item>
    //           <Link href="/register" variant="body2">
    //             {"Don't have an account? Sign Up"}
    //           </Link>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </Box>
    // </Container>
  );
};

export default Login;
