import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState);

  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, tno);

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {makeDiv("tno", todo.tno)}
      {makeDiv("writer", todo.writer)}
      {makeDiv("title", todo.title)}
      {makeDiv("due date", todo.dueDate)}
      {makeDiv("complete", todo.complete)}
    </div>
  );
};

const makeDiv = (title, value) => (
  <div className="flex justify-center">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <div className="w-1/5 p-6 text-right font-bold">{title} </div>
      <div className="w-4/6 p-6 rounded-r border border-solid shadow-md">
        {value}
      </div>
    </div>
  </div>
);

export default ReadComponent;
