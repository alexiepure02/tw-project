import "../styles.scss";

const Button = ({ variant, onClick, children }) => {
  return (
    <button
      className={"button button" + variant}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
