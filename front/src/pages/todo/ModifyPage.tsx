import { useParams } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyComponent";

const ModifyPage: React.FC<Record<string, never>> = () => {
  const { tno } = useParams<{ tno: string }>();

  const tnoNumber: number = tno ? parseInt(tno) : 0;

  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Todo Modify Page</div>

      <ModifyComponent tno={tnoNumber} />
    </div>
  );
};

export default ModifyPage;
