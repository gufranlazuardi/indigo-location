"use client";

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
import { useEffect, useState } from "react";

const TableData = () => {
  const [data, setData] = useState<Users[]>([]);

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

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Website</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((datas) => (
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
  );
};

export default TableData;
