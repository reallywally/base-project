import * as React from "react";
import ReadComponent from "../../components/products/ReadComponent";
import { useParams } from "react-router-dom";

const ReadPage: React.FC = () => {
  const { pno } = useParams<{ pno: string }>();

  const pnoNumber: number = pno ? parseInt(pno) : 0;

  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Products Read Page</div>

      <ReadComponent pno={pnoNumber}></ReadComponent>
    </div>
  );
};

export default ReadPage;
