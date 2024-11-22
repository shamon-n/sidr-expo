// pages/index.js
import Image from "next/image";
import Form from "./form";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-3xl max-w-7xl w-full flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="p-6 md:p-10 md:w-1/2 space-y-8 min-h-[100vh] flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
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

        {/* Right Section */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          <div className="w-[95%] h-[95%] bg-gray-100 rounded-2xl overflow-hidden">
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
