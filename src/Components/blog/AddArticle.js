import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddArticle = ({ handleAddArticle }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [category, setCategory] = useState("Unknown");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  // function handleChangeImage(e) {
  //   console.log(e.target.files);
  //   setCoverUrl(URL.createObjectURL(e.target.files[0]));
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      title,
      description,
      coverUrl,
      category,
      content,
      date,
    };
    handleAddArticle(newArticle);
  };
  return (
    <div className="adding-article" style={{ textAlign: "center", backgroundColor: "whitesmoke" }}>

      <div>
        <h1>Add Article</h1>
          <form onSubmit={handleSubmit}>
            TITLE:
            <input
              type="text"
              required
              className="form-control"
              placeholder="enter title here"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            DESCRIPTION:
            <input
              type="text"
              required
              className="form-control"
              placeholder="enter description here"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            Article image:
            {/* <input type="file" onChange={handleChangeImage} value={coverUrl} /> */}
            <input
              type="url"
              className="form-control"
              placeholder="enter url here"
              onChange={(e) => setCoverUrl(e.target.value)}
              value={coverUrl}
            />
            Category:
              aria-label="Default select example"
              onChange={(e) => setCategory(e.target.value)}
              value={category}

              <option value="Unknown">Unknown</option>
              <option value="Élécrité">Élécrité</option>
              <option value="maçonerie">maçonerie</option>
              <option value="plomberie">plomberie</option>
              <option value="Électro-ménager">Électro-ménager</option>
            Date:
            <input
              type="text"
              className="form-control"
              placeholder="enter date here"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
            Content:
            <input
              type="text"
              className="form-control"
              placeholder="enter article here"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <button variant="primary" type="submit">
              Save Article
            </button>
          </form>

          <button variant="secondary" onClick={handleClose}>
            cancel
          </button>

      </div>
    </div>
  );
};

export default AddArticle;
