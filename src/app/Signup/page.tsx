'use client';

import { useRouter } from 'next/navigation';
import InputField from '@/components/InputField';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext'; // Import the useAuth hook

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; name?: string }>({});
  const { signIn } = useAuth(); // Access signIn function from AuthContext
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ email: '', password: '', name: '' });

    // Basic validation
    let formErrors = { email: '', password: '', name: '' };
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';

    setErrors(formErrors);

    // If there are errors, stop form submission
    if (formErrors.name || formErrors.email || formErrors.password) return;

    // Save user data to local storage
    localStorage.setItem('userDetails', JSON.stringify(formData));

    // Sign in the user
    signIn(formData.email);

    // Redirect to login or another page
    router.push('/Login');
  };

  return (
    <div className="max-w-md m-auto h-screen md:h-[88.5vh] px-[20px] flex items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border-y-[2px] border-[#252B42]">
        <h2 className="text-2xl mb-4 font-bold text-[#252B42]">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <InputField
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleInputChange}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
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
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            <div
              className="absolute inset-y-0 right-0 pr-4 top-8 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button type="submit" className="w-full bg-[#252B42] text-white py-2 mt-4 rounded">
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link href="/Login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
