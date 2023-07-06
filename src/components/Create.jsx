import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('az');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
    .then(() => {
      console.log('new blog added');
      setIsPending(false);
      navigate("/");
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Blog Content:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="az">az</option>
        </select>
        { isPending ? <button disabled onClick={handleSubmit}>Adding blog...</button> : <button onClick={handleSubmit}>Add blog</button> }
      </form>
      <div>
        <h3>Preview:</h3>
        <h4>Title:</h4>
        <p>{ title }</p>
        <h4>Content:</h4>
        <p>{ body }</p>
        <h4>Author:</h4>
        <p>{ author }</p>
      </div>
    </div>
  );
}
 
export default Create;