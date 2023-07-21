import React, { useState } from "react";
import { parseISO, isValid } from "date-fns";

const MyComponent: React.FC = () => {
  const [dateInput, setDateInput] = useState("");
  const [error, setError] = useState("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDateInput(value);
    setError("");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const parsedDate = parseISO(dateInput);
    if (!isValid(parsedDate)) {
      setError("Invalid date.");
    } else {
      // Perfor
      setError("Valid date.");
      // ...
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dateInput">Date:</label>
        <input
          className="border border-black "
          type="date"
          id="dateInput"
          value={dateInput}
          onChange={handleDateChange}
        />
        {error && <span>{error}</span>}
      </div>
      <button
        className="py-2 px-4 bg-blue-500 rounded-md text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default MyComponent;
