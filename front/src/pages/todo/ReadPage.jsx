import { useParams } from "react-router-dom";
import ReadComponent from "../../componenets/todo/ReadComponent";

const ReadPage = () => {
  const { tno } = useParams();

  return (
    <div className="font-extrabold w-full bg-white mt-6">
      <div className="text-2xl">todo read page Component {tno}</div>

      <ReadComponent tno={tno} />
    </div>
  );
};

export default ReadPage;
