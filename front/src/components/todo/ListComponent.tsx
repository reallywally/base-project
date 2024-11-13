import * as React from "react";
import useCustomMove, { TCustomMove } from "../../hooks/useCustomMove";
import { PageResponse } from "../../interfaces/PageResponse";
import { Todo } from "../../interfaces/Todo";
import { getList } from "../../apis/todoApi";
import PageComponent from "../commons/PageComponent";

const ListComponent: React.FC<Record<string, never>> = () => {
  const { page, size, moveToList, refresh, moveToRead }: TCustomMove =
    useCustomMove();

  const [serverData, setServerData] = React.useState<PageResponse<Todo>>();

  React.useEffect(() => {
    getList({ page, size }).then((data: PageResponse<Todo>) => {
      setServerData(data);
    });
  }, [page, size, refresh]);

  if (!serverData) {
    return <></>;
  }

  return (
    <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
      <div className="flex flex-wrap mx-auto justify-center p-6">
        {serverData.dtoList.map((todo) => (
          <div
            key={todo.tno}
            className="w-full min-w-[400px]  p-2 m-2 rounded shadow-md"
            onClick={() => moveToRead(todo.tno)} //이벤트 처리 추가
          >
            <div className="flex ">
              <div className="font-extrabold text-2xl p-2 w-1/12">
                {todo.tno}
              </div>
              <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
                {todo.title}
              </div>
              <div className="text-1xl m-1 p-2 w-2/10 font-medium">
                {todo.dueDate}
              </div>
            </div>
          </div>
        ))}
      </div>

      <PageComponent
        serverData={serverData}
        movePage={moveToList}
      ></PageComponent>
    </div>
  );
};

export default ListComponent;
