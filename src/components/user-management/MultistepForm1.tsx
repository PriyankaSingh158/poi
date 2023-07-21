// import { useForm } from "react-hook-form";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { BasicInfoForm } from "./BasicInfoForm";
import { AddLeader1 } from "./AddLeader1";
import { ContactInfoForm } from "./ContactInfo";

export const MultiStepForm1: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    console.log("op");
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && <BasicInfoForm nextFunc={handleNext} />}

          {currentStep === 2 && (
            <AddLeader1 nextfunc={handleNext} previousFunc={handlePrevious} />
          )}

          {currentStep === 3 && (
            <ContactInfoForm previousFunc={handlePrevious} />
          )}
        </form>
      </div>
    </>
  );
};
