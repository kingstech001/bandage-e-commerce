'use client'
import InputField from '@/components/InputField';
import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '', name:'' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Data:', formData);
    // API Call to register user (dummy for now)
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter your name"
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter your email"
        onChange={handleInputChange}
        required
      />
        <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        placeholder="Enter your password"
        onChange={handleInputChange}
        required
      />
        <button type="submit" className="w-full bg-blue-500 text-white py-2">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
