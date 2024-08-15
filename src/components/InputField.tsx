import React from 'react';

interface InputFieldProps {
  label?: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  required = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && <label htmlFor={name} className="mb-2 font-medium text-gray-700">{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-[#252B42]"
      />
    </div>
  );
};

export default InputField;
