import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

const SelectRentingPeriodPage = () => {
  const { id } = useParams();

  const [rentingPeriod, setRentingPeriod] = useState(7);

  const navigate = useNavigate();

  const calculatePrice = () => {
    return Math.ceil(rentingPeriod * 0.55);
  };

  const goToRentMoviePage = () => {
    navigate("/movie/" + id + "/rent-movie", {
      state: {
        period: rentingPeriod,
        price: Math.ceil(rentingPeriod * 0.55),
      },
    });
  };

  return (
    <div className="rent-movie">
      <div className="select-period-container">
        <h1 className="title">Selectează perioada de închiriere</h1>
        <input
          onChange={(e) => {
            setRentingPeriod(parseFloat(e.target.value));
          }}
          type="range"
          id="period"
          className="period-range"
          name="period"
          min="7"
          max="90"
          value={rentingPeriod}
        />
        <h1>Perioada: {rentingPeriod} zile</h1>
        <h1>Preț: {calculatePrice()} RON</h1>
        <Button variant="1" onClick={goToRentMoviePage}>
          Continuă
        </Button>
      </div>
    </div>
  );
};
export default SelectRentingPeriodPage;
