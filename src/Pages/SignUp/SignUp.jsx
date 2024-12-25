import { useForm } from "react-hook-form";
import GetHostUrl from "../../firebase/getHostUrl";
import Input from "../../components/Input/Input";
import InputImage from "../../components/Input/InputImage";
import useAuth from "../../Hooks/useAuth";
import { useCreateUserMutation } from "../../redux/feature/user/userApi";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../../components/googleSignIn/GoogleSignIn";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser } = useAuth();
  const [createUserIntoDb] = useCreateUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const roles = [
    { label: "Buyer", value: "buyer" },
    { label: "Seller", value: "seller" },
  ];

  const onSubmit = async (data) => {
    try {
      Swal.fire({
        title: "Please wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const image = await GetHostUrl(data.image[0]);
      data.image = image;

      const firebaseResponse = await createUser(data.email, data.password);
      if (firebaseResponse) {
        const response = await createUserIntoDb(data).unwrap();
        if (response.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            timer: 1500,
            showConfirmButton: false,
          });
          navigate("/");
        } else {
          throw new Error("Failed to save user in the database.");
        }
      }
    } catch (error) {
      const errorMessage =
        error.message || "An error occurred during registration.";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
      console.error(error);
    }
  };

  const password = watch("password");

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-accent">
            Join TechOrbit Today!
          </h1>
          <p className="py-6 text-primary">
            Discover the latest gadgets, unbeatable deals, and exclusive offers
            at MobileMart. Sign up now!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Name"
              placeholder="Enter Your Name"
              type="text"
              register={register}
              registerName="name"
              validation={{ required: "Name is required" }}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

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
                  message: "Password must be at least 8 characters",
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

            <Input
              label="Confirm Password"
              placeholder="Confirm Your Password"
              type="password"
              register={register}
              registerName="confirmPassword"
              validation={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              }}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <InputImage register={register} registerName="image" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                className="select select-info w-full max-w-xs"
                {...register("role", { required: "Please select a role" })}
              >
                <option value="" disabled>
                  Select Role
                </option>
                {roles.map((role, index) => (
                  <option value={role.value} key={index}>
                    {role.label}
                  </option>
                ))}
              </select>
              {errors.role && (
                <p className="text-red-500">{errors.role.message}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-info hover:btn-neutral">
                Sign Up
              </button>
            </div>
          </form>

          <GoogleSignIn />

          <div className="my-4 text-center text-info">
            <p>
              Already Have an account?{" "}
              <Link to="/login">
                <span className="text-red-600 underline">Log In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
