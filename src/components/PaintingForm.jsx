import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

function PaintingForm({ painting = null, onSubmit }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const isEditMode = !!painting;

  useEffect(() => {
    if (painting) {
      setTitle(painting.title || "");
      setArtist(painting.artist || "");
      setPrice(painting.price || "");
      setImage(painting.image || "");
      setDescription(painting.description || "");
    }
  }, [painting]);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!artist.trim()) newErrors.artist = "Artist name is required.";
    if (!price || parseFloat(price) <= 0) newErrors.price = "Price must be positive.";
    if (!image.trim()) newErrors.image = "Image URL is required.";
    if (!description.trim() || description.length < 10) newErrors.description = "At least 10 characters required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const paintingData = { title, artist, price, image, description };
    if (isEditMode) paintingData.id = painting.id;

    onSubmit(paintingData);

    if (!isEditMode) {
      setTitle(""); setArtist(""); setPrice(""); setImage(""); setDescription(""); setErrors({});
    }
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <h2 className="form-title">{isEditMode ? "Edit Painting" : "Add a New Painting"}</h2>
        <ToastContainer />

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}
              className={errors.title ? "input-error" : ""} />
            {errors.title && <p className="error-text">{errors.title}</p>}
          </div>

          <div className="form-group">
            <label>Artist Name</label>
            <input type="text" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)}
              className={errors.artist ? "input-error" : ""} />
            {errors.artist && <p className="error-text">{errors.artist}</p>}
          </div>

          <div className="form-group">
            <label>Price</label>
            <input type="number" name="price" min="0" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)}
              className={errors.price ? "input-error" : ""} />
            {errors.price && <p className="error-text">{errors.price}</p>}
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input type="url" name="image" value={image} onChange={(e) => setImage(e.target.value)}
              className={errors.image ? "input-error" : ""} />
            {errors.image && <p className="error-text">{errors.image}</p>}
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea name="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}
              className={errors.description ? "input-error" : ""}></textarea>
            {errors.description && <p className="error-text">{errors.description}</p>}
          </div>

          <button type="submit" className="submit-btn">
            {isEditMode ? "Save Changes" : "Add Painting"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PaintingForm;
