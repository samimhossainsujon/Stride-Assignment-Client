/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../components/Hooks/useAuth";
import GoogleLogin from "./GoogleLogin";

function RegisterPage() {
    const { createUser } = useAuth();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();
  

    const passwordPattern = /^(?=.*[@])[A-Za-z\d@]{8,}$/;

    const onSubmit = (data: { email: string; role: string; password: string; }) => {
        const email = data.email;
        const role = data.role;
        const status = role === "buyer" ? "approve" : "pending";
        const wishlist: never[] = [];

        const userData = { email, role, status, wishlist };

        // Create user with Firebase
        createUser(data.email, data.password)
            .then(() => {
                // Save user to database with role
                axios.post("http://localhost:5000/api/register", userData)
                    .then((res) => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Registration Successful!',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    });
            })
            .catch(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error during registration!',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };


    return (
        <div className="mt-16">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        {...register("email", { required: "Email address is required" })}
                        type="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm text-black bg-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email address
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        {...register("password", {
                            required: "Password is required",
                            pattern: {
                                value: passwordPattern,
                                message: "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character"
                            }
                        })}
                        type="password"
                        id="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="password"
                        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        {...register("repeatPassword", {
                            required: "Please confirm your password",
                            validate: (value) => value === watch("password") || "Passwords do not match"
                        })}
                        type="password"
                        id="repeatPassword"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="repeatPassword"
                        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Confirm Password
                    </label>
                    {errors.repeatPassword && <p className="text-red-500 text-sm">{errors.repeatPassword.message}</p>}
                </div>

                <div className="relative z-0 w-full group mt-3">
                    <label htmlFor="role" className="block mb-2 text-sm font-medium text-black">Select Role</label>
                    <select
                        id="role"
                        {...register("role", { required: "Role is required" })}
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                    {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                </div>

                <div className="flex justify-center items-center mt-5">
                    <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded">Register</button>
                </div>

            </form>
            <div className="flex justify-center items-center mt-5">
                <GoogleLogin />
            </div>
        </div>
    );
}


export default RegisterPage;
