import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function CompletionPage() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/movies");
  };

  return (
    <div className="completion">
      <div className="container">
        <h1 className="title">🎉 Felicitări! 🎉</h1>
        <p className="text">
          Ai închiriat cu succes filmul <strong>{state.movieName} </strong>
          pentru perioada de <strong>{state.period}</strong> de zile.
        </p>
        <Button variant="1" onClick={goToHomePage}>
          Acasă
        </Button>
      </div>
    </div>
  );
}

export default CompletionPage;
