import { useCallback } from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const ReadPage = () => {
  const { tno } = useParams();
  const nav = useNavigate();

  // 쿼리스트링 유지할려고
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  const queryStr = createSearchParams({ page, size }).toString();

  // callback ==============
  const moveToModify = useCallback(
    (tno) => {
      nav({ pathname: `/todo/modify/${tno}`, search: queryStr });
    },
    [tno, page, size]
  );

  const moveToList = useCallback(() => {
    nav({ pathname: "/todo/list", search: queryStr });
  }, [page, size]);

  return (
    <div className="text-3xl font-extrabold">
      todo read page {tno}
      <button onClick={() => moveToModify(33)}>test modify</button>
      <button onClick={() => moveToList()}>test list</button>
    </div>
  );
};

export default ReadPage;
