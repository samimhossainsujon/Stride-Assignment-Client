import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import GoogleSignIn from "../../components/googleSignIn/GoogleSignIn";

const LogIn = () => {
  const Navigate = useNavigate();
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      Swal.fire({
        title: "wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const response = await signIn(data.email, data.password);
      if (response._tokenResponse.registered) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log in Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
      const errorMessage =
        error.code === "auth/user-not-found"
          ? "User not found. Please check your email."
          : error.code === "auth/wrong-password"
          ? "Incorrect password. Please try again."
          : error.message || "An unexpected error occurred.";

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-accent">
            Join TechOrbit Today!
          </h1>
          <p className="py-6 text-primary">
            Discover the latest gadgets, unbeatable deals, and exclusive offers
            at MobileMart. Sign up now and stay connected to the world of smart
            technology at your fingertips!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              placeholder="Enter Your Email"
              type="email"
              register={register}
              registerName="email"
              validation={{ required: "Email is required" }}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <Input
              label="Password"
              placeholder="Enter Your Password"
              type="password"
              register={register}
              registerName="password"
              validation={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must include uppercase, lowercase, number, and special character",
                },
              }}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-info hover:btn-neutral">
                Log In
              </button>
            </div>
          </form>
          {/* google sign in */}

          <GoogleSignIn />

          {/* ------------ */}
          <div className="my-4 text-center text-info">
            <p>
              New Here?{" "}
              <Link to={"/signup"}>
                <span className="text-red-600 underline">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
