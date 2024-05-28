import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export default axiosWithConfig;
