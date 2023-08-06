import { useNavigate, useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";

const BlogArticle = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("https://mmd4q6-8000.csb.app/blogs/" + id);
  const navigate = useNavigate();
  const handleClick = () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      fetch("https://mmd4q6-8000.csb.app/blogs/" + blog.id, {
        // Fetching data from our endpoint, with Blog ID given as a parameter
        method: "DELETE", // Using Delete method to delete this article with this Blog ID
      }).then(() => {
        navigate("/"); // Then navigating to the homepage
      });
    }
  };

  return (
    <div className="blog-article">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <div className="back-to-listing">
            <Link to="/">Back to listing page</Link>
          </div>
          <h2>{blog.title}</h2>
          <p className="author">Author: {blog.author}</p>
          <img src={blog.image} alt={blog.title} />
          <div className="article-content">{blog.body}</div>
          <button onClick={handleClick} className="btn">
            Delete this article
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogArticle;
