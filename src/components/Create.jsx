import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, image, body, author };

    setIsPending(true);

    fetch('https://mmd4q6-8000.csb.app/blogs', { // Fetching data from our endpoint
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog) // Converting from objects to strings
    })
    .then(() => {
      console.log('new blog added');
      setIsPending(false); // Removing the pending flag to remove the loading message
      navigate("/"); // Then navigating to the homepage
    })
  }

  return (
    <div className="create">

      <h2>Add A New Article</h2>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Article Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Author:</label>
          <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="">Please select</option>
            <option value="mario">Person A</option>
            <option value="yoshi">Person B</option>
            <option value="az">Person C</option>
          </select>
          <label>Image URL:</label>
          <input
            type="text"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></input>
          <label>Content:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          { isPending ? <button disabled onClick={handleSubmit} className="btn" >Adding Article...</button> : <button onClick={handleSubmit} className="btn" >Add Article</button> }
        </form>
      </div>

      <div className="preview">
        <div className="preview-area">
          <h3>Preview:</h3>
          <div className="preview-row">
            <h4>Title:</h4>
            <p>{ title }</p>
          </div>
          <div className="preview-row">
            <h4>Author:</h4>
            <p>{ author }</p>
          </div>
          <div className="preview-row">
            <h4>Image:</h4>
            <p><img src={ image } alt={ title } /></p>
          </div>
          <div className="preview-row">
            <h4>Content:</h4>
            <p>{ body }</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
 
export default Create;