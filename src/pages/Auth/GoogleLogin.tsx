import { useNavigate } from "react-router-dom";
import useAuth from "../../components/Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin().then(() => {
            navigate('/');
        })
    };

    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button onClick={handleGoogleLogin} className="btn btn-primary btn-outline w-full">
                    <FcGoogle size={24} />Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;