import { createBrowserRouter } from "react-router-dom";
import { ComponentType, lazy, ReactNode, Suspense } from "react";
import todoRouter from "./todoRouter.tsx";

const Loading: ReactNode = <div>Loading,,,,</div>;

const Main: ComponentType = lazy(() => import("../pages/MainPage"));

const About: ComponentType = lazy(() => import("../pages/AboutPage"));

const TodoIndex: ComponentType = lazy(
  () => import("../pages/todo/IndexPage.tsx")
);

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "todo",
    element: (
      <Suspense fallback={Loading}>
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter(),
  },
]);

export default root;
