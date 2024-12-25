/* eslint-disable react/prop-types */
const Select = ({
  selectName,
  options,
  register,
  registerName,
  validation,
}) => {
  return (
    <select
      className="select select-info w-full max-w-xs"
      {...register(registerName, validation)}
    >
      <option disabled selected>
        {selectName}
      </option>
      {options.map((option, i) => (
        <option value={option.value} key={i}>
          {option.option}
        </option>
      ))}
    </select>
  );
};

export default Select;
