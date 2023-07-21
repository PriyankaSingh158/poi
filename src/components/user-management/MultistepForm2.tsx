import React, { useState, ChangeEvent, FormEvent } from "react";
import { LoginForm2 } from "./LoginLayout";
import { RegisterForm2 } from "./LeaderRegisterForm";
export const MultistepForm2: React.FC = () => {
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
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && <LoginForm2 nextFunc={handleNext} />}

          {currentStep === 2 && (
            <RegisterForm2
              nextfunc={handleNext}
              previousFunc={handlePrevious}
            />
          )}
        </form>
      </div>
    </>
  );
};
