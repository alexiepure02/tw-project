import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMovie } from "../functions/api";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

import axios from "axios";

const appearance = {
  theme: "night",
  labels: "floating",
  variables: {
    colorPrimary: "#26255b",
  },
};

const RentMoviePage = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const [movie, setMovie] = useState(null);

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const createPaymentIntent = async () => {
    const response = await axios.post(
      "http://localhost:8800/create-payment-intent",
      { amount: state.price * 100 }
    );
    var { publishableKey, clientSecret } = await response.data;

    console.log(publishableKey);
    setStripePromise(loadStripe(publishableKey));

    console.log(clientSecret);
    setClientSecret(clientSecret);
  };

  useEffect(() => {
    setMovie(getMovie(id));

    createPaymentIntent();
  }, []);

  return (
    movie && (
      <div className="rent-movie">
        <div className="container">
          <div className="movie-info">
            <h2 className="title">{movie.title}</h2>
            <h3 className="period">Perioadă: {state.period} zile</h3>
            <h3 className="price">Preț: {state.price} lei</h3>
            <img className="movie-cover-card" src={movie.thumbnailCover} />
          </div>
          <div className="payment-info">
            {clientSecret && stripePromise && (
              <Elements
                stripe={stripePromise}
                options={{ clientSecret, appearance }}
              >
                <CheckoutForm
                  movieId={id}
                  movieName={movie.title}
                  period={state.period}
                />
              </Elements>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default RentMoviePage;
