import { useParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage: React.FC<Record<string, never>> = () => {
  const { tno } = useParams<{ tno: string }>();

  const tnoNumber: number = tno ? parseInt(tno) : 0;

  return (
    <div className="font-extrabold w-full bg-white mt-6">
      <div className="text-2xl ">Todo Read Page Component {tno}</div>

      <ReadComponent tno={tnoNumber}></ReadComponent>
    </div>
  );
};

export default ReadPage;
