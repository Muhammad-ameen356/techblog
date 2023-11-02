"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      toast.error("Both email and password are required");
      return;
    }
    const response = await axios.post("/api/admin/login", formData);
    router.push("/admin/dashboard");
    console.log(response);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Toaster />
      <div className="bg-white p-8 rounded shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
