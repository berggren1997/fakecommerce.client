import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import agent from "../../api/agent";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm();

  const handleApiError = (errors) => {
    if (errors) {
      errors.foreach((error) => {
        if (error.includes("Password")) {
          setError("password", { message: error });
        } else if (error.includes("Email")) {
          setError("email", { message: error });
        } else if (error.includes("Username")) {
          setError("username", { message: error });
        } else if (error.includes("Confirmpassword")) {
          setError("confirmpassword", { message: error });
        }
      });
    }
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <form
        onSubmit={handleSubmit((data) => {
          agent.Account.register(data)
            .then(() => {
              toast.success("Register successful, you may now log in");
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        })}
      >
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

          <label className="text-gray-700">Email</label>
          <input
            autoFocus
            {...register("email", { required: "email is required" })}
            className="w-full py-2 px-2 bg-gray-100 rounded-md mx-auto text-gray-500 outline-none focus:outline-none mb-4"
            type="text"
          />

          <label className="text-gray-700">Password</label>
          <input
            {...register("password", { required: "password is required" })}
            className="w-full py-2 px-2 bg-gray-100 rounded-md text-gray-500 focus:outline-none mb-4"
            type="password"
          />

          <label className="text-gray-700">Confirm Password</label>
          <input
            {...register("confirmpassword", {
              required: "password is required",
            })}
            className="w-full py-2 px-2 bg-gray-100 rounded-md text-gray-500 focus:outline-none mb-4"
            type="password"
          />

          <button className="button w-full my-4">Register</button>
        </div>
      </form>
      <div className="items-center w-48">
        <p className="text-center text-gray-700 italic">
          Already have an account?
        </p>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="button w-full mt-4"
        >
          Sign in
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
    //     <Typography component="h1" variant="h5" mb={4}>
    //       Sign up
    //     </Typography>
    //     <Box
    //       component="form"
    //       onSubmit={handleSubmit((data) => {
    //         agent.Account.register(data)
    //           .then(() => {
    //             toast.success("Register successful, you may now log in");
    //             navigate("/login");
    //           })
    //           .catch((error) => handleApiError(error));
    //       })}
    //     >
    //       <Grid container spacing={2}>
    //         <Grid item xs={12}>
    //           <TextField
    //             fullWidth
    //             label="Username"
    //             {...register("username", { required: "Username is required" })}
    //             error={!!errors.username}
    //             helperText={errors?.username?.message}
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             fullWidth
    //             id="email"
    //             label="Email Address"
    //             {...register("email", {
    //               required: "Email is required",
    //               pattern: {
    //                 value: /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/,
    //                 message: "Not a valid email address",
    //               },
    //             })}
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             required
    //             fullWidth
    //             label="Password"
    //             type="password"
    //             {...register("password", { required: "Password is required" })}
    //             error={!!errors.password}
    //             helperText={errors?.password?.message}
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             required
    //             fullWidth
    //             type="password"
    //             name="confirmPassword"
    //             label="Confirm Password"
    //             {...register("confirmpassword", {
    //               required: "Confirm Password is required",
    //             })}
    //             error={!!errors.password}
    //             helperText={errors?.password?.message}
    //           />
    //         </Grid>
    //       </Grid>
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
    //         Sign Up
    //       </Button>
    //       <Grid container justifyContent="flex-end">
    //         <Grid item>
    //           <Link href="/login" variant="body2">
    //             Already have an account? Sign in
    //           </Link>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </Box>
    // </Container>
  );
};

export default Register;
