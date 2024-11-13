import { ReactElement, Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading....</div>;
const ProductsList = lazy(() => import("../pages/products/ListPage.tsx"));
const ProductsAdd = lazy(() => import("../pages/products/AddPage.tsx"));
const ProductRead = lazy(() => import("../pages/products/ReadPage.tsx"));
const ProductModify = lazy(() => import("../pages/products/ModifyPage"));

const productRouter = (): Array<{ path: string; element: ReactElement }> => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <ProductsList />
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate replace to="/products/list" />,
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <ProductsAdd />
        </Suspense>
      ),
    },
    {
      path: "read/:pno",
      element: (
        <Suspense fallback={Loading}>
          <ProductRead />
        </Suspense>
      ),
    },
    {
      path: "modify/:pno",
      element: (
        <Suspense fallback={Loading}>
          <ProductModify />
        </Suspense>
      ),
    },
  ];
};

export default productRouter;
