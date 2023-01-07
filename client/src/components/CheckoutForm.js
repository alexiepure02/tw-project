import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();

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
      // confirmParams: {
      //   // Make sure to change this to your payment completion page
      //   // return_url: `${window.location.origin}/completion`,
      // },
    });

    if (paymentIntent !== undefined) {
      // add movie to user's rented movies

      navigate("/completion");
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
      <button
        disabled={isProcessing || !stripe || !elements}
        className="button button2"
      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
