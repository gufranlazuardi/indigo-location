import axiosWithConfig from "../axiosWithConfig";

export const getUsers = async () => {
  const response = await axiosWithConfig.get(`/users`);
  return response.data;
};
