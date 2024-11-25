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
          ? "bg-white min-h-screen flex justify-center items-center p-0"
          : "min-h-screen flex justify-center items-center p-6 bg-gray-100"
      }`}
    >
      <div
        className="bg-white shadow-lg rounded-3xl w-full flex flex-col md:flex-row gap-8"
        style={{
          maxWidth: "90rem",
          minHeight: "80vh",
        }}
      >
        {/* Left Section */}
        <div
          className={`p-6 md:p-10 md:w-1/2  flex flex-col justify-center order-2 md:order-1 ${
            isSmallScreen ? "mt-[-45px] space-y-2" : "md:mt-0 space-y-6"
          }`}
        >
          <h1
            className={`${
              isSmallScreen && "text-center text-[24px] "
            }text-3xl sm:text-4xl font-extrabold text-[#034771] justify-center content-center font-sans text-[28px] `}
          >
            Your New Apartment in Dubai Awaits!
          </h1>
          <div
            className={`border-b border-lightgray-900 w-1/4 ${
              isSmallScreen && "mx-auto pt-[-20px]"
            } `}
          ></div>
          <p
            className={`sm:text-lg text-[#0678bc] font-bold font-sans text-[20px]  ${
              isSmallScreen
                ? "mt-[-65px] text-center justify-center content-center text-[19px]"
                : "md:mt-0"
            }`}
          >
            The luxurious Sidr Residences in the {!isSmallScreen && <br />}{" "}
            prestigious district of Expo City Dubai.
          </p>
          <p className="text-sm sm:text-base text-gray-500 font-light">
            Fill in the form and our expert will contact you.
          </p>
          <Form isSmallScreen={isSmallScreen} />
        </div>

        {/* Right Section (Image) */}
        <div
          className={`relative md:w-1/2 flex justify-center items-center order-1 md:order-2 ${
            isSmallScreen ? "pt-2" : "md:pt-0"
          }`}
        >
          <div
            className={`${
              isSmallScreen
                ? "w-[95%] min-h-[30vh] max-h-[40vh]"
                : "w-[95%] h-[95%]"
            } bg-gray-100  overflow-hidden`}
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
                // borderRadius: "1rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
