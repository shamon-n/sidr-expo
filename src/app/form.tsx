"use client"; // Marks the component as client-side

import React, { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
}
interface FormProps {
  isSmallScreen: boolean;
}
const Form: React.FC<FormProps> = ({ isSmallScreen }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  const [status, setStatus] = useState<{ success: boolean; message: string }>({
    success: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: false, message: "" });

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong!");
      }

      const data = await response.json();
      setStatus({ success: true, message: data.message });
      setFormData({ name: "", phone: "", email: "" }); // Reset form
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setStatus({ success: false, message: error.message });
    }
  };

  return (
    <div
      className={`flex justify-center ${
        isSmallScreen ? "w-[100%]" : "w-[60%]"
      } `}
    >
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-none">
        {/* Name Input */}
        <div className="relative">
          <label
            htmlFor="name"
            className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-blue-900 font-semibold"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Phone Input */}
        <div className="relative">
          <label
            htmlFor="phone"
            className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-blue-900 font-semibold"
          >
            Your Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+971 52 123 4567"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <label
            htmlFor="email"
            className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-blue-900 font-semibold	"
          >
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Get Details and Special Offers
        </button>

        {/* Status Message */}
        {status.message && (
          <p
            className={`mt-4 text-sm ${
              status.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
