// pages/index.js
"use client";

import Image from "next/image";
import Form from "./form";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${
        isSmallScreen
          ? "bg-white  min-h-screen flex justify-center items-center p-0"
          : " min-h-screen flex justify-center items-center p-6 bg-gray-100"
      } `}
    >
      <div className="bg-white shadow-lg rounded-3xl max-w-7xl w-full flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="p-6 md:p-10 md:w-1/2 space-y-8 flex flex-col justify-center order-2 md:order-1 mt-[-40px] sm:mt-[-80px] md:mt-0">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 justify-center content-center">
            Your New Apartment in Dubai Awaits!
          </h1>
          <p className="text-base sm:text-lg text-blue-600 font-medium">
            The luxurious Sidr Residences in the prestigious district of Expo
            City Dubai.
          </p>
          <p className="text-sm sm:text-base text-gray-500 font-light">
            Fill in the form and our expert will contact you.
          </p>
          <Form />
        </div>

        {/* Right Section (Image) */}
        {/* <div className="relative md:w-1/2 flex justify-center items-center order-1 md:order-2 pt-2 sm:pt-[-20px] md:pt-0">
          <div className="w-[95%] h-[95%] bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.uae-flats.com/public/uploads/Whats_App_Image_2024_11_06_at_10_23_55_1_ab689e6784.jpeg"
              alt="Sidr Residences"
              width={isSmallScreen ? 100 : 900}
              height={isSmallScreen ? 100 : 900}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
        </div> */}
        <div
          className={`relative md:w-1/2 flex justify-center items-center order-1 md:order-2 ${
            isSmallScreen ? "pt-2" : "md:pt-0"
          }`}
        >
          <div
            className={`${
              isSmallScreen ? "w-[95%] h-[40%]" : "w-[95%] h-[95%]"
            } bg-gray-100 rounded-2xl overflow-hidden`}
          >
            <Image
              src="https://cdn.uae-flats.com/public/uploads/Whats_App_Image_2024_11_06_at_10_23_55_1_ab689e6784.jpeg"
              alt="Sidr Residences"
              width={900}
              height={900}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
