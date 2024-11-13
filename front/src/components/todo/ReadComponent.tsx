import * as React from "react";
import { getOne } from "../../apis/todoApi";

import { Todo } from "../../interfaces/Todo";
import useCustomMove, { TCustomMove } from "../../hooks/useCustomMove";

interface Tno {
  tno: number;
}

const ReadComponent: React.FunctionComponent<Tno> = ({
  tno,
}: Tno): JSX.Element => {
  const [todo, setTodo] = React.useState<Todo>();

  const { moveToList, moveToModify }: TCustomMove = useCustomMove();

  React.useEffect(() => {
    getOne(tno).then((data: Todo) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  if (!todo) {
    return <></>;
  }

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4 ">
      {makeDiv("Tno", todo.tno)}
      {makeDiv("Writer", todo.writer)}
      {makeDiv("Title", todo.title)}
      {makeDiv("Due Date", todo.dueDate)}
      {makeDiv("Complete", todo.complete ? "Completed" : "Not Yet")}

      {/* buttons.........start */}
      <div className="flex justify-end p-4">
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={() => moveToList()}
        >
          List
        </button>

        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
          onClick={() => moveToModify(tno)}
        >
          Modify
        </button>
      </div>
    </div>
  );
};

const makeDiv = (title: string, value: string | number): JSX.Element => (
  <div className="flex justify-center">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <div className="w-1/5 p-6 text-right font-bold">{title}</div>
      <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
        {value}
      </div>
    </div>
  </div>
);

export default ReadComponent;
