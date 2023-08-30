import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
}

const Input: React.FC<InputProps> = ({ label, isError, ...props }) => {
  const borderColor = isError ? "darkRed" : "gray70";
  return (
    <div className="mb-4">
      {label && (
        <label className="block white text-sm font-bold mb-1">{label}</label>
      )}
      <input
        className={`w-full py-2 px-3 rounded border focus:outline-none focus:ring focus:ring-opacity-50 mb-2
        border-${borderColor}`}
        {...props}
      />
    </div>
  );
};

export default Input;
