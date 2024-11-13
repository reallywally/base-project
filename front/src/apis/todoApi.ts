import axios, { AxiosResponse } from "axios";
import { Todo, TodoInputType } from "../interfaces/Todo";
import { PageResponse } from "../interfaces/PageResponse";

export const API_SERVER_HOST = "http://localhost:8080";

export type AddResultType = {
  TNO: number;
};

export type UpdateDeleteResultType = {
  result: string;
};

const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno: number): Promise<Todo> => {
  const res = await axios.get(`${prefix}/${tno}`);

  return res.data;
};

export const getList = async (pageParam: {
  page: number;
  size: number;
}): Promise<PageResponse<Todo>> => {
  const { page, size } = pageParam;

  const res = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });

  return res.data;
};

export const postAdd = async (
  todoObj: TodoInputType
): Promise<AddResultType> => {
  const res = await axios.post(`${prefix}/`, todoObj);

  return res.data;
};

export const deleteOne = async (
  tno: number
): Promise<UpdateDeleteResultType> => {
  const res = await axios.delete(`${prefix}/${tno}`);

  return res.data;
};

export const putOne = async (todo: Todo): Promise<UpdateDeleteResultType> => {
  const res = await axios.put(`${prefix}/${todo.tno}`, todo);

  return res.data;
};
