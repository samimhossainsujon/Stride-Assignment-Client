import useGetSingleUser from "../../Hooks/useGetSingleUser";
import Loading from "../../components/Loading/Loading";

const Profile = () => {
  const [singleUserData, isSingleUserDataLoading] = useGetSingleUser();

  if (isSingleUserDataLoading && !singleUserData) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="card lg:card-side shadow-none bg-white rounded-lg overflow-hidden">
        <figure className="lg:w-1/3">
          <img
            className="lg:h-96 h-36 w-full object-cover"
            src={singleUserData?.image}
            alt={singleUserData.name}
          />
        </figure>
        <div className="card-body lg:w-2/3 p-6">
          <h2 className="text-2xl lg:text-5xl font-bold mb-2">
            {singleUserData.name}
          </h2>
          <p className="text-gray-700 lg:flex-grow-0 mb-2 lg:mb-0 lg:text-2xl">
            <span className="font-bold">Email:</span> {singleUserData.email}
          </p>
          <p className="text-gray-700 mb-2 lg:text-2xl">
            <span className="font-bold">Role:</span> {singleUserData.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
