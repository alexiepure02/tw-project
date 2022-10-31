import "../styles.scss";

const Button = ({ variant, onClick, children }) => {
  return (
    <button class={"button" + variant} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
