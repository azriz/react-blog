import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("https://mmd4q6-8000.csb.app/blogs/");

  return (
    <div className="home">
      {error && <h3>{error}</h3>}
      {isPending && <h3>Loading...</h3>}
      {blogs && <BlogList blogs={blogs} title="All Articles" />}
    </div>
  );
};

export default Home;
