import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate, useParams } from "react-router-dom";
import { getUserInfo } from "../functions/authentication";
import Button from "./Button";

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const { id } = useParams();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();

  const userInfo = getUserInfo();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      description: "User Id: " + userInfo.id + "; Movie Id: " + id,
      receipt_email: userInfo.email,
      // confirmParams: {
      //   // Make sure to change this to your payment completion page
      //   // return_url: `${window.location.origin}/completion`,
      // },
    });

    if (paymentIntent !== undefined) {
      // add movie to user's rented movies

      navigate("/movie/" + id + "/completed-payment", {
        state: {
          movieName: props.movieName,
          period: props.period,
        },
      });
    }

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occured.");
      }
    }
    setIsProcessing(false);
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
      <Button disabled={isProcessing || !stripe || !elements} variant="2">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </Button>
      {/* Show any error or success messages */}
      {message && (
        <div id="payment-message">{<p className="error">{message}</p>}</div>
      )}
    </form>
  );
}
