import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

interface PaymentButtonProps {
  priceId: string;
  planName: string;
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const PaymentButton: React.FC<PaymentButtonProps> = ({ priceId, planName }) => {
  const handlePayment = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          planName,
        }),
      });

      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 bg-purple-600 hover:bg-purple-700 text-white"
    >
      Get Started with {planName}
    </button>
  );
};