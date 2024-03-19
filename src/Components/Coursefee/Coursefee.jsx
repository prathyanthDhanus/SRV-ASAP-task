import React from "react";
import { LuWallet } from "react-icons/lu";
import { IoShieldCheckmark } from "react-icons/io5";
import "./Coursefee.css";

const Coursefee = () => {
  const installationData = [
    {
      description: "First Installment - 7500 (At the time of registration)",
    },
    {
      description: "Second Installment - 32500 (Before class commencement)",
    },
    {
      description:
        "Third Installment - 35000 (On completion of 300 hours of the course",
    },
  ];

  return (
    <div>
      <h2>Course Fee</h2>
      <div className="course-fee-container">
        <div className="wallet-container">
          <LuWallet className="wallet-icon" />
        </div>
        <div className="vertical-rule" />
        <div className="total-amount">
          <p>Total Amount</p>
          <h2>INR 75,000</h2>
        </div>
      </div>
      <div className="installation-plan">
        <h4>Installment Plan</h4>
        {installationData.map((item) => (
          <div key={item.id} className="installment-item">
            <IoShieldCheckmark  className="checkmark-icon" />
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coursefee;
