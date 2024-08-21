'use client';

import { useRouter } from 'next/navigation';
import InputField from '@/components/InputField';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext'; // Import the useAuth hook

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
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
    setErrors({ email: '', password: '' });

    // Basic validation
    let formErrors = { email: '', password: '' };
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';

    setErrors(formErrors);

    // If there are errors, stop form submission
    if (formErrors.email || formErrors.password) return;

    // Retrieve user data from local storage
    const storedUserDetails = localStorage.getItem('userDetails');

    if (storedUserDetails) {
      const parsedUserDetails = JSON.parse(storedUserDetails);

      // Check if the login data matches the stored data
      if (formData.email === parsedUserDetails.email && formData.password === parsedUserDetails.password) {
        signIn(formData.email); // Sign in the user
        router.push('/Checkout'); // Redirect to Checkout page
      } else {
        setErrors({ ...formErrors, email: 'Invalid email or password. Please try again.' }); // Set error for invalid credentials
      }
    } else {
      router.push('/Signup'); // Redirect to Signup page if no user details found in local storage
    }
  };

  return (
    <div className="max-w-md m-auto h-screen md:h-[88.5vh] px-[20px] flex items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border-y-[2px] border-[#252B42]">
        <h2 className="text-2xl font-bold mb-6 text-[#252B42]">Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="w-full bg-[#252B42] text-white py-2 mt-4 rounded"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account?{' '}
          <Link href="/Signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
