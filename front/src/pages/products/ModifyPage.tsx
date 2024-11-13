import React from "react";
import { useParams } from "react-router-dom";
import ModifyComponent from "../../components/products/ModifyComponent";

const ModifyPage: React.FC = () => {
  const { pno } = useParams<{ pno: string }>();

  const pnoNumber: number = pno ? parseInt(pno) : 0;

  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Products Modify Page</div>

      <ModifyComponent pno={pnoNumber} />
    </div>
  );
};

export default ModifyPage;
