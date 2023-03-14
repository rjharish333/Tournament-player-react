import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = await getStripe();
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

export default function Stripe() {

  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51MKiIPSHPKm4xZNw0E0nu3rJQ82YMCwBczhp7tFEzGQYUXp6SNsdue3BWbMUlQnXzcw0DjvI7qR31j5tUgGlShEE00yOIN4ZvS',
  };
    
  return (
    <div className="App">
      <div className="product">
        {/* <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        /> */}
        <div>
        <Elements stripe={stripePromise} options={options}>
         <CheckoutForm />
        </Elements>
        </div>
      </div>
    </div>
  );
}