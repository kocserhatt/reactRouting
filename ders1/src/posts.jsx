import { Link } from "react-router-dom";

export const Posts = () => {
        return(
            <>
            {[1,2,3,4,5,].map((item) => (
                <Link key={item} to={`/posts/${item}`}>
                    <div>{item}</div>
                </Link>
            ))}
    </>
)}