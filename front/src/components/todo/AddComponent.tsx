import { useState } from "react";
import { AddResultType, postAdd } from "../../apis/todoApi";
import ResultModal from "../commons/ResultModal";
import useCustomMove, { TCustomMove } from "../../hooks/useCustomMove";
import { Todo, TodoInputType } from "../../interfaces/Todo";

const AddComponent: React.FC<Record<string, never>> = () => {
  const [todo, setTodo] = useState<TodoInputType>({
    title: "",
    writer: "",
    dueDate: "",
  });

  const [result, setResult] = useState<AddResultType | null>();

  const { moveToList }: TCustomMove = useCustomMove();

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name in todo) {
      todo[e.target.name as keyof TodoInputType] = e.target.value;
    }

    setTodo({ ...todo });
  };

  const handleClickAdd = (): void => {
    console.log(todo);

    //console.log(todo)
    postAdd(todo)
      .then((data) => {
        console.log(data);

        setResult(data);
        setTodo({ title: "", writer: "", dueDate: "" });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const closeModal = (): void => {
    setResult(null);
    moveToList();
  };

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {/* 모달 처리 */}
      {result ? (
        <ResultModal
          title={"Add Result"}
          content={`New ${result.TNO} Added`}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}

      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="title"
            type={"text"}
            value={todo.title}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="writer"
            type={"text"}
            value={todo.writer}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
            name="dueDate"
            type={"date"}
            value={todo.dueDate}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
          <button
            type="button"
            className="rounded p-4 w-36 bg-blue-500 text-xl  text-white "
            onClick={handleClickAdd}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComponent;
