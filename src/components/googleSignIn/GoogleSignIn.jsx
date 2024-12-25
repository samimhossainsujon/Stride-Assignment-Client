import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useCreateUserMutation } from "../../redux/feature/user/userApi";
import { useNavigate } from "react-router-dom";
const GoogleSignIn = () => {
  const { googleSignIn } = useAuth();
  const [createUserIntoDb] = useCreateUserMutation();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      Swal.fire({
        title: "wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      await googleSignIn().then(async (data) => {
        if (data.user) {
          const user = {
            email: data.user.email,
            name: data.user.displayName,
            image: data.user.photoURL,
            role: "buyer",
          };
          await createUserIntoDb(user).unwrap();
          Swal.fire({
            title: "Logged in... Successfully",
            icon: "success",
            timer: 1500,
          });
          navigate("/");
        }
      });
    } catch (error) {
      if (error.data === "User already exists.") {
        Swal.fire({
          title: "Logged in... Successfully",
          icon: "success",
          timer: 1500,
        });
        navigate("/");
        return;
      }
      Swal.fire({
        title: error?.data,
        text: error?.data,
        icon: "error",
      });
    }
  };
  return (
    <div>
      <div className="divider text-primary">OR</div>
      <div className="mx-8">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-info hover:btn-neutral w-full"
        >
          <FcGoogle className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
