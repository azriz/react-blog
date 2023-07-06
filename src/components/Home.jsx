import Bloglist from "./Bloglist";
import useFetch from "../useFetch";

const Home = () => {

  const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setData(newBlogs);
  // };

  

  return (
    <div className="home">
      {error && <h3>{error}</h3>}
      {isPending && <h3>Loading...</h3>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;