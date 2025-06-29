import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Signup = ({ onSwitchToLogin }) => {
  const { signup, loading } = useAuth();
  const [form, setForm] = useState({ username: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    } else if (form.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }
    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const { confirmPassword, ...signupData } = form;
    const result = await signup(signupData);
    if (result.success) {
      setForm({ username: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100 flex justify-center items-center p-4">
      <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8 w-[26rem] flex flex-col justify-center relative">
        {/* Logo/Avatar */}
        <div className="flex flex-col items-center mb-4">
          <div className="bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg mb-3">
            <span className="text-3xl text-white">📝</span>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-1 tracking-tight text-center">Create Account</h1>
          <p className="text-gray-500 text-xs text-center">Join us!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col justify-center">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2 rounded-xl border-2 transition-all duration-200 bg-white/60 focus:bg-white/90 shadow-sm ${
                  errors.username
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-400"
                } outline-none focus:ring-2 focus:ring-blue-100`}
                placeholder="Choose username"
                autoComplete="username"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2 rounded-xl border-2 transition-all duration-200 bg-white/60 focus:bg-white/90 shadow-sm ${
                  errors.password
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-400"
                } outline-none focus:ring-2 focus:ring-blue-100`}
                placeholder="Create password"
                autoComplete="new-password"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2 rounded-xl border-2 transition-all duration-200 bg-white/60 focus:bg-white/90 shadow-sm ${
                  errors.confirmPassword
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-400"
                } outline-none focus:ring-2 focus:ring-blue-100`}
                placeholder="Confirm password"
                autoComplete="new-password"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2.5 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg mt-2"
          >
            {loading && (
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
            )}
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        {/* Switch to Login */}
        <div className="text-center mt-3">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-200 underline underline-offset-2"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup; 