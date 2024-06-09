import useAuth from './store/context'
import './App.css'
import { Link } from 'react-router-dom'


function App() {
  const { name, setName } = useAuth();
  console.log(name);
  return (
    <>
    <Link to="/home">
      <button>Home</button>
    </Link>
    <Link to="/Posts">
            <button>posts</button>
            </Link>
    </>
  )
}

export default App
