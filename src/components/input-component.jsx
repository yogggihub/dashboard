const InputField = ({ labelName, ...restprops }) => {
  return (
    <>
      <label htmlFor={restprops.id}>{labelName}</label>
      <input {...restprops} />
    </>
  );
};
export default InputField;
