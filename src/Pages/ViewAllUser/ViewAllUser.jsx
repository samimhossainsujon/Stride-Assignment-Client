import { useState } from "react";
import {
  useGetAllUsersQuery,
  useChangeUserRoleMutation,
  useBanUserMutation,
} from "../../redux/feature/user/userApi";
import Loading from "../../components/Loading/Loading";
import { FaEdit, FaBan } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const AllUsers = () => {
  const { data: users, isLoading, error } = useGetAllUsersQuery();
  const [changeUserRole] = useChangeUserRoleMutation();
  const [banUser] = useBanUserMutation();
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setValue("role", user.role);
    document.getElementById("edit_user_modal").showModal();
  };

  const handleBanUser = async (userId) => {
    try {
      await banUser(userId).unwrap();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User banned successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to ban user.",
      });
      console.error("Failed to ban user:", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      await changeUserRole({ id: selectedUser._id, role: data.role }).unwrap();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User role updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      document.getElementById("edit_user_modal").close();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update user role.",
      });
      console.error("Failed to update user role:", error);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary mr-2"
                    onClick={() => handleEditUser(user)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleBanUser(user._id)}
                  >
                    <FaBan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Modal */}
      <dialog
        id="edit_user_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit User Role</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                {...register("role", { required: "Role is required" })}
                className="select select-bordered w-full"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && (
                <p className="text-red-500">{errors.role.message}</p>
              )}
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("edit_user_modal").close()
                }
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AllUsers;
