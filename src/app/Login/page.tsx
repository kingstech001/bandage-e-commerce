'use client'
import InputField from '@/components/InputField';
import { useState } from 'react';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // Handle login logic (authentication, API call, etc.)
  };

  return (
    <div className="max-w-md pt-[30px] m-auto h-[65vh] px-[32px] flex items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border-y-[2px] border-[#252B42]">
        <h2 className="text-2xl font-bold mb-6 text-[#252B42]">Login</h2>
        <form onSubmit={handleSubmit}>
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
              {showPassword ? <FaRegEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#252B42] text-white py-2 mt-4 rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
