import { Link } from "react-router-dom";

export const Posts = () => {
    return (
        <>
            <div>posts</div>
            <Link to="/Home">
            <button>home</button>
            </Link>
            <Link to="/App">
            <button>app</button>
            </Link>
        </>
    );
}