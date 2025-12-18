import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      let newValue = value;
      if (name === "publishedYear" || name === "rating") {
        if (value === "") {
          newValue = "";
        } else {
          let num = parseInt(value, 10);
          if (name === "rating") {
            num = Math.min(num, 10);
            num = Math.max(num, 0);
          }
          newValue = num;
        }
      }
      return {
        ...prevState,
        [name]: newValue,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://backend-assignment1-alpha.vercel.app/books", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (!response.ok) {
        // eslint-disable-next-line no-throw-literal
        throw "Failed to add Book";
      }
      const data = await response.json();
      console.log("Book added", data);
    } catch (error) {
      console.log(error);
    }
    setFormData({
      title: "",
      author: "",
      publishedYear: "",
      genre: "",
      language: "",
      country: "",
      rating: "",
      summary: "",
      coverImageUrl: "",
    });
  };
  return (
    <div className="add-movie-container">
      <h2>Add Book</h2>
      <form className="movie-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="publishedYear">Published Year:</label>
          <input
            id="publishedYear"
            type="number"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="genre">Genre:</label>
          <input
            id="genre"
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="language">Language:</label>
          <input
            id="language"
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="rating">Rating:</label>
          <input
            id="rating"
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="summary">Summary:</label>
          <input
            id="summary"
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="coverImageUrl">Cover Image URL:</label>
          <input
            id="coverImageUrl"
            type="text"
            name="coverImageUrl"
            value={formData.coverImageUrl}
            onChange={handleChange}
          />
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
