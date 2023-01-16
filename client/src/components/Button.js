import "../styles.scss";

const Button = ({ disabled, variant, onClick, children }) => {
  return (
    <button
      disabled={disabled}
      className={"button button" + variant}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
