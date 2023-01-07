import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../functions/api";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const appearance = {
  theme: "night",
  labels: "floating",
  variables: {
    colorPrimary: "#26255b",
  },
};

const RentMoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    setMovie(getMovie(id));

    fetch("http://localhost:8800/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { publishableKey, clientSecret } = await result.json();

      console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));

      console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    movie && (
      <div className="rent-movie">
        <div className="payment-card">
          <div className="movie-info">
            <h1 className="title">{movie.title}</h1>
            <img className="movie-cover-card" src={movie.thumbnailCover} />
          </div>
          <div className="payment-info">
            {clientSecret && stripePromise && (
              <Elements
                stripe={stripePromise}
                options={{ clientSecret, appearance }}
              >
                <CheckoutForm />
              </Elements>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default RentMoviePage;
