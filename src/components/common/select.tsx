import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  isError?: boolean;
}

const Select: React.FC<SelectProps> = ({ label, isError, ...props }) => {
  const borderColor = isError ? "red" : "gray70";

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-1">
          {label}
        </label>
      )}
      <select
        className={`w-full py-2 px-3 rounded border focus:outline-none focus:ring focus:ring-opacity-50 border-${borderColor} focus:border-${borderColor}`}
        {...props}
      />
    </div>
  );
};

export default Select;
