import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: black;
  padding: 20px;
`;

const SubscriptionPlansWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PlanCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    background-color: #e50914;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const subscriptionPlans = [
  {
    name: "Basic",
    description: "Access to standard content",
    price: 9.99,
  },
  {
    name: "Standard",
    description: "HD quality and multi-device access",
    price: 13.99,
  },
  {
    name: "Premium",
    description: "Ultra HD and multi-device access",
    price: 17.99,
  },
];

function Subscription() {
  const handleSubscribe = (selectedPlan) => {
    alert(`Subscribed to ${selectedPlan.name} plan!`);
  };

  return (
    <AppWrapper>
      <h1>Choose Your Subscription</h1>
      <SubscriptionPlansWrapper>
        {subscriptionPlans.map((plan, index) => (
          <PlanCard key={index}>
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <p>${plan.price} per month</p>
            <button onClick={() => handleSubscribe(plan)}>Subscribe</button>
          </PlanCard>
        ))}
      </SubscriptionPlansWrapper>
    </AppWrapper>
  );
}

export default Subscription;
