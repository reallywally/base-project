import axios from "axios";
import { Product } from "../interfaces/Product";
import { API_SERVER_HOST } from "./todoApi";
import { PageParam } from "../interfaces/PageParam";
import { PageResponse } from "../interfaces/PageResponse";

const host = `${API_SERVER_HOST}/api/products`;

export type AddResultType = {
  result: number;
};

export type UpdateDeleteResultType = {
  result: string;
};

export const postAdd = async (product: FormData): Promise<AddResultType> => {
  const res = await axios.post(`${host}/`, product);

  return res.data;
};

export const getList = async (
  pageParam: PageParam
): Promise<PageResponse<Product>> => {
  const { page, size } = pageParam;

  const res = await axios.get(`${host}/list`, {
    params: { page: page, size: size },
  });

  return res.data;
};

export const getOne = async (pno: number): Promise<Product> => {
  const res = await axios.get(`${host}/${pno}`);

  return res.data;
};

export const putOne = async (
  pno: number,
  product: FormData
): Promise<UpdateDeleteResultType> => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };

  const res = await axios.put(`${host}/${pno}`, product, header);

  return res.data;
};

export const deleteOne = async (
  pno: number
): Promise<UpdateDeleteResultType> => {
  const res = await axios.delete(`${host}/${pno}`);

  return res.data;
};
