import * as React from "react";
import dynamic from "next/dynamic";
import Table from "@/components/TableData";

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const DynamicHome = () => {
  return (
    <div className="flex flex-col overflow-auto justify-center items-center">
      <h2 className="text-[48px] mt-[4rem] bg-gradient-to-r from-[#54F9E5] to-[#0074FB] text-transparent bg-clip-text">
        Find Suitable Location of Your Company
      </h2>

      {/* Map */}
      <div className="mt-[4rem]">
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
