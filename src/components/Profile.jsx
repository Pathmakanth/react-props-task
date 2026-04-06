import React, { useRef, useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Profile() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);

  const { theme, toggleTheme } = useContext(ThemeContext);

  // Handle Image Upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className={`profile ${theme}`}>
      <h2>My Profile</h2>

      {/* Image Preview */}
      <div className="img-box">
        {image ? (
          <img src={image} alt="Profile" />
        ) : (
          <p>No Image</p>
        )}
      </div>

      {/* Hidden Input */}
      <input
        type="file"
        ref={fileRef}
        onChange={handleUpload}
        accept="image/*"
        hidden
      />

      {/* Upload Button */}
      <button onClick={() => fileRef.current.click()}>
        📷 Upload Image
      </button>

      {/* Theme Toggle */}
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
      </button>
    </div>
  );
}

export default Profile;