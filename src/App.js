import { useState } from "react";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="container">
      {!selectedImage && (
        <div>
          Drag and Drop anywhere
          <br />
          or <b>upload from computer</b>
          <br />
          or <b>browse the library</b>
        </div>
      )}
      <div>
        {!selectedImage && (
          <input accept="image/*" type="file" onChange={imageChange} />
        )}

        {selectedImage && (
          <div className="wrapper">
            <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
            <div className="detail-box"></div>
            <input
              accept="image/*"
              type="file"
              className="change-img"
              onChange={imageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
