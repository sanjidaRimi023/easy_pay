"use client";
import React from "react";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  pricePeriod: string | null;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular: boolean;
}

const CheckIconLight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-blue-500 mr-3 shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const CheckIconDark = () => (
  <div className="h-5 w-5 mr-3 shrink-0 rounded-full bg-zinc-700 flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const pricingPlans: PricingPlan[] = [
  {
    name: "Free Plan",
    price: "$0",
    pricePeriod: "/month",
    description: "Free for personal payments.",
    features: [
      { text: "Up to 100 transactions per month", included: true },
      { text: "Basic fraud protection", included: true },
      { text: "Email support", included: true },
    ],
    buttonText: "Get Free Plan",
    isPopular: false,
  },
  {
    name: "Advanced",
    price: "$19",
    pricePeriod: "/month",
    description: "Minimal fees for advanced transactions",
    features: [
      { text: "Up to 1000 transactions per month", included: true },
      { text: "Advanced fraud protection", included: true },
      { text: "Detailed transaction reports", included: true },
      { text: "Priority email & chat support", included: true },
    ],
    buttonText: "Get Advanced Plan",
    isPopular: true,
  },
  {
    name: "Business",
    price: "$29", // Corrected from image
    pricePeriod: "/month", // Corrected from image
    description: "Premium business transactions", // Corrected from image
    features: [
      { text: "Unlimited transactions per month", included: true },
      { text: "Premium fraud protection", included: true },
      { text: "Detailed transaction reports", included: true },
      { text: "Priority email & chat support", included: true },
    ],
    buttonText: "Get Business Plan",
    isPopular: false,
  },
];

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const cardClasses = `
    flex flex-col p-8 rounded-2xl
    ${
      plan.isPopular
        ? "bg-accent shadow-2xl"
        : "bg-white border border-gray-200"
    }
  `;

  const buttonClasses = `
    w-full py-3 px-6 rounded-full font-medium mt-auto text-base
    ${
      plan.isPopular
        ? "bg-blue-600 text-white hover:bg-accent"
        : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
    }
  `;

  return (
    <div className={cardClasses}>
      <h3
        className={`text-2xl font-bold mb-2 ${
          plan.isPopular ? "text-white" : "text-gray-900"
        }`}
      >
        {plan.name}
      </h3>

      <p
        className={`text-sm mb-6 ${
          plan.isPopular ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {plan.description}
      </p>

      <div
        className={`flex items-baseline mb-8 ${
          plan.isPopular ? "text-white" : "text-gray-900 "
        }`}
      >
        <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
        {plan.pricePeriod && (
          <span
            className={`text-lg ml-1 ${
              plan.isPopular ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {plan.pricePeriod}
          </span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature: PricingFeature, index: number) => (
          <li
            key={index}
            className={`flex items-center ${
              plan.isPopular ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {plan.isPopular ? <CheckIconDark /> : <CheckIconLight />}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <button className={buttonClasses}>{plan.buttonText}</button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="relative mb-20">
      <div className="relative container mx-auto px-4">
        <div className="flex text-center flex-col mb-4 items-center">
          <h3 className="text-secondary text-sm font-semibold tracking-wide">
            PRICING
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-accent leading-tight w-1/2">
            Simple transparent pricing no hidden fees
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {pricingPlans.map((plan: PricingPlan, index: number) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
