import { useParams } from "react-router-dom";

const ReadPage = () => {
  const { tno } = useParams();

  return <div className="text-3xl font-extrabold">todo read page {tno}</div>;
};

export default ReadPage;
