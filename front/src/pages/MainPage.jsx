import { Link } from "react-router-dom";

const MainPage = () =>{
    return (
        <div>

        <div className="flex">
        <Link to={'about'}> about</Link>
        </div>
        <div className="text-3xl">
            main page
        </div>

    </div>
);
}

export default MainPage
