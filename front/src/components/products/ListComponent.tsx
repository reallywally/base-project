import React from "react";
import useCustomMove, { TCustomMove } from "../../hooks/useCustomMove";
import { PageResponse } from "../../interfaces/PageResponse";
import { Product } from "../../interfaces/Product";
import { getList } from "../../apis/productsApi";
import FetchingModal from "../commons/FetchingModal";
import { API_SERVER_HOST } from "../../apis/todoApi";
import PageComponent from "../commons/PageComponent";

const host = API_SERVER_HOST;

const ListComponent: React.FC<Record<string, never>> = () => {
  const { page, size, refresh, moveToList, moveToRead }: TCustomMove =
    useCustomMove();

  const [serverData, setServerData] = React.useState<PageResponse<Product>>();

  //for FetchingModal
  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    setFetching(true);

    getList({ page, size }).then((data: PageResponse<Product>) => {
      setServerData(data);
      setFetching(false);
    });
  }, [page, size, refresh]);

  if (!serverData) {
    return <></>;
  }

  return (
    <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
      <h1>Products List Component</h1>

      {fetching ? <FetchingModal /> : <></>}

      <div className="flex flex-wrap mx-auto p-6">
        {serverData.dtoList.map((product) => (
          <div
            key={product.pno}
            className="w-1/2 p-1 rounded shadow-md border-2"
            onClick={() => moveToRead(product.pno)}
          >
            <div className="flex flex-col  h-full">
              <div className="font-extrabold text-2xl p-2 w-full ">
                {product.pno}
              </div>
              <div className="text-1xl m-1 p-2 w-full flex flex-col">
                <div className="w-full overflow-hidden ">
                  <img
                    alt="product"
                    className="m-auto rounded-md w-60"
                    src={`${host}/api/products/view/s_${product.uploadFileNames?.[0]}`}
                  />
                </div>

                <div className="bottom-0 font-extrabold bg-white">
                  <div className="text-center p-1">이름: {product.pname}</div>
                  <div className="text-center p-1">가격: {product.price}</div>
                </div>
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
