import { Suspense, lazy, ReactNode, ComponentType, ReactElement } from "react";
import { Navigate } from "react-router-dom";

const Loading: ReactNode = <div>Loading....</div>;
const TodoList: ComponentType = lazy(() => import("../pages/todo/ListPage"));
const TodoRead: ComponentType = lazy(() => import("../pages/todo/ReadPage"));
const TodoAdd: ComponentType = lazy(() => import("../pages/todo/AddPage"));
const TodoModify: ComponentType = lazy(
  () => import("../pages/todo/ModifyPage")
);

const todoRouter = (): Array<{ path: string; element: ReactElement }> => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <TodoList />
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate replace to="list" />,
    },
    {
      path: "read/:tno",
      element: (
        <Suspense fallback={Loading}>
          <TodoRead />
        </Suspense>
      ),
    },
    {
      path: "modify/:tno",
      element: (
        <Suspense fallback={Loading}>
          <TodoModify />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <TodoAdd />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
