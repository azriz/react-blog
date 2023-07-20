import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link className="nav-logo" to="/"><h1>React Blog</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add Article</Link>
      </div>
    </nav>
   );
}
 
export default Navbar
;