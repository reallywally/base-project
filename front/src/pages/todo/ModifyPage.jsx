import { useNavigate } from "react-router-dom";

const ModifyPage = ({ tno }) => {
  const nav = useNavigate();

  const moveToRead = () => {
    nav({ pathname: `/todo/read/${tno}` });
  };

  const moveToList = () => {
    nav({ pathname: "/todo/list" });
  };

  return <div className="text-3xl font-extrabold">modify page 22 {tno}</div>;
};

export default ModifyPage;
