import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../components/Hooks/useAuth";
import GoogleLogin from "./GoogleLogin";



const Loginpage = () => {
    const { login } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        login(data.email, data.password);
        navigate('/');
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">             
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register('email', { required: true })} />
                            {errors.email && (<p className='text-red-500 font-light'> Email is required</p>)}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register('password', { required: true, minLength: 6 })} />
                            {errors.password?.type === "required" && (<p className='text-red-500 font-light'> Password is required</p>)}
                            {errors.password?.type === "minLength" && (<p className='text-red-500 font-light'> Password must have at lest 6 characters</p>)}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary uppercase">login</button>
                        </div>
                        <GoogleLogin />
                        <p className='my-4 text-sm font-normal'>Already have an account? <Link className='text-purple-700' to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Loginpage