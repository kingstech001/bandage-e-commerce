'use client'
import InputField from '@/components/InputField';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Data:', formData);
    // API Call to register user (dummy for now)
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='max-w-md mt-[33px] m-auto h-[65vh] px-[32px] flex items-center'>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border-y-[2px] border-[#252B42]">
        <h2 className="text-2xl mb-4 font-bold text-[#252B42]">Sign Up</h2>
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
          <div className="relative">
            <InputField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleInputChange}
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-4 top-8 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button type="submit" className="w-full bg-[#252B42] text-white py-2 rounded mt-4">
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
