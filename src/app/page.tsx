// pages/index.js
import Image from "next/image";
import Form from "./form";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-5xl w-full flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="p-8 md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Your New Apartment in Dubai Awaits!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            The luxurious Sidr Residences in the prestigious district of Expo
            City Dubai.
          </p>
          <p className="text-gray-500 mb-6">
            Fill in the form and our expert will contact you
          </p>
          <Form />
        </div>

        {/* Right Section */}
        <div className="relative md:w-1/2 h-64 md:h-auto">
          <Image
            src="https://cdn.uae-flats.com/public/uploads/Whats_App_Image_2024_11_06_at_10_23_55_1_ab689e6784.jpeg"
            alt="Sidr Residences"
            fill
            className="object-cover rounded-b-lg md:rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}
