const Button = ({ children, ...restButtonProps }) => {
  return (
    <button type="submit" {...restButtonProps}>
      {children}
    </button>
  );
};
export default Button;
