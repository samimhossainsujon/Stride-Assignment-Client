import { useGetSingleUserQuery } from "../redux/feature/user/userApi";
import useAuth from "./useAuth";

const useGetSingleUser = () => {
  const { user } = useAuth();
  const { data: singleUserData, isLoading: isSingleUserDataLoading } =
    useGetSingleUserQuery(user?.email, {
      skip: !user,
    });
  return [singleUserData, isSingleUserDataLoading];
};

export default useGetSingleUser;
