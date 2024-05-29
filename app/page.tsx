import * as React from "react";
import dynamic from "next/dynamic";
import Table from "@/components/TableData";
import Image from "next/image";

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const DynamicHome = () => {
  return (
    <div className="flex flex-col overflow-auto justify-center items-center">
      <div className="flex flex-col items-center">
        <Image
          alt="home-image"
          src="/home-image.png"
          width={300}
          height={100}
          className="mt-[2rem]"
        />
        <h2 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-semibold mt-[1rem] bg-gradient-to-r from-[#54F9E5] to-[#0074FB] text-transparent bg-clip-text text-center">
          Find Suitable Location of Your Company
        </h2>
        <p className="text-[30px] mt-4 text-slate-600 dark:text-slate-300 w-full px-[8rem] sm:px-1 md:px-[8rem] lg:px-[8rem] text-center">
          Discover the{" "}
          <span className="bg-gradient-to-r from-[#0074FB] to-[#54F9E5] text-transparent bg-clip-text">
            ideal location
          </span>{" "}
          for your business with our comprehensive location analysis
          and insights
        </p>
      </div>

      {/* Map */}
      <div className="mt-[5rem]">
        <DynamicMap />
      </div>

      {/* Table */}
      <div className="w-full px-[5rem] mt-[4rem]">
        <Table />
      </div>
    </div>
  );
};

export default DynamicHome;
