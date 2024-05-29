import * as React from "react";
import dynamic from "next/dynamic";
import Table from "@/components/TableData";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
        <h2 className="sm:text-[48px] md:text-[48px] lg:text-[48px] xl:text-[52px] font-semibold mt-[1rem] bg-gradient-to-r from-[#54F9E5] to-[#0074FB] text-transparent bg-clip-text">
          Find Suitable Location of Your Company
        </h2>
        <p className="text-[30px] mt-4 text-slate-600 dark:text-slate-300 w-full px-[8rem] text-center">
          Discover the{" "}
          <span className="bg-gradient-to-r from-[#0074FB] to-[#54F9E5] text-transparent bg-clip-text">
            ideal location
          </span>{" "}
          for your business with our comprehensive location analysis
          and insights
        </p>
        <Button className="mt-[1rem] bg-blue-800 text-white">
          Find out
        </Button>
      </div>

      {/* Map */}
      <div className="mt-[3rem]">
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
