/* eslint-disable react/prop-types */
const InputImage = ({register, registerName}) => {
  return (
    <input
      type="file"
      className="file-input file-input-bordered file-input-info w-full"
      {...register(registerName)}
    />
  );
};

export default InputImage
