/* eslint-disable react/prop-types */
const Input = ({
  label,
  type,
  placeholder,
  register,
  registerName,
  validation,
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input border-info"
        required
        {...register(registerName, validation)}
      />
    </div>
  );
};

export default Input;
