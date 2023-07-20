import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {

  return (
    <>
      <h2>{ title }</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`}>
            <div className="blog-preview" key={blog.id}>
                <img src={ blog.image } alt={ blog.title } />
                <h2>{ blog.title }</h2>
                <p>Author: { blog.author }</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
 
export default BlogList;
