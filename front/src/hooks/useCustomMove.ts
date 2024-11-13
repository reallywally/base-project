import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { PageParam } from "../interfaces/PageParam";
import { useState } from "react";

export interface TCustomMove {
  moveToList: (param?: PageParam) => void;
  moveToModify: (num: number) => void;
  moveToRead: (num: number) => void;
  page: number;
  size: number;
  refresh: boolean;
}

const getNum = (param: string | null, defaultValue: number): number => {
  if (!param) {
    return defaultValue;
  }

  return parseInt(param);
};

const useCustomMove = (): TCustomMove => {
  const navigate = useNavigate();

  const [queryParams] = useSearchParams();

  const [refresh, setRefresh] = useState<boolean>(false); //추가

  const page: number = getNum(queryParams.get("page"), 1);

  const size: number = getNum(queryParams.get("size"), 10);

  const queryDefault = createSearchParams({
    page: page.toString(),
    size: size.toString(),
  }).toString(); //새로 추가

  const moveToList = (pageParam?: PageParam): void => {
    let queryStr = "";

    if (pageParam) {
      const pageNum = pageParam.page || 1;
      const sizeNum = pageParam.size || 10;

      console.log("-----------------");
      console.log(pageNum, sizeNum);

      queryStr = createSearchParams({
        page: pageNum.toString(),
        size: sizeNum.toString(),
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    setRefresh(!refresh); //추가

    navigate({ pathname: `../list`, search: queryStr });
  };

  const moveToModify = (num: number): void => {
    console.log(queryDefault);

    navigate({
      pathname: `../modify/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  const moveToRead = (num: number) => {
    console.log(queryDefault);

    navigate({
      pathname: `../read/${num}`,
      search: queryDefault,
    });
  };

  return { moveToList, page, size, moveToModify, refresh, moveToRead };
};

export default useCustomMove;
