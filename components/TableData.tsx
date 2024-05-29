"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users } from "@/utils/apis";
import axiosWithConfig from "@/utils/axiosWithConfig";
import { Input } from "./ui/input";

const TableData = () => {
  const [data, setData] = useState<Users[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchTable() {
    try {
      const response = await axiosWithConfig("/users");
      setData(response.data);
    } catch (error: any) {
      console.error("Error fetching table: ", error);
    }
  }

  useEffect(() => {
    fetchTable();
  }, []);

  const filteredData = data.filter((item) => {
    return item.address.city
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex flex-col pb-[5rem]">
      <Input
        type="text"
        placeholder="Search city..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-[20rem] p-2 border border-gray-300 rounded"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Website</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredData.map((datas) => (
            <TableRow key={datas.id}>
              <TableCell>{datas.id}</TableCell>
              <TableCell>{datas.name}</TableCell>
              <TableCell>{datas.username}</TableCell>
              <TableCell>{datas.email}</TableCell>
              <TableCell>{datas.address.city}</TableCell>
              <TableCell>{datas.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableData;
