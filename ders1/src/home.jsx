import { useState } from "react";
import { Link } from "react-router-dom";

export function Home () {
  const [name, setName] = useState("");
  console.log(name);
  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <>
    <Link to="/">
    <div>
     <input type="text" onChange={handleNameChange} />
      <div>{name}</div> 
      <button>App</button>
    </div>
    </Link>
    <Link to="/Posts">
            <button>posts</button>
            </Link>
    </>
  )
}