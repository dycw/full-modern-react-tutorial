import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          required
          type="text"
          value={title}
        />
        <label>Blog body:</label>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          required
          value={body}
        ></textarea>
        <label>Blog author:</label>
        <select onChange={(e) => setAuthor(e.target.value)} value={author}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
