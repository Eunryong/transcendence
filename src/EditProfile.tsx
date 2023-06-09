import React, { useState, useRef } from "react";
import img from "./image/noimg.gif";
import "./Profile.css";
import Layout from "./Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// name, image, auth

const SetProfile = () => {
  const move = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const auth = false;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formData = new FormData();
    // api 가져와서 수정
    // if (name != prevName) {
    //   formData.set("name", name);
    // }
    // if (image != prevImage) {
    //   formData.set("image", image);
    // }
    axios.post("back", formData);
    console.log(image);
    move("/profile");
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
      previewImage(file);
    } else {
      setImage(img);
      previewImage(null);
    }
  };

  const previewImage = (image: File | null) => {
    if (!image) {
      setPreview(img);
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(image);
  };

  const handleAuth = () => {
    move("/auth");
  };

  return (
    <>
    <Layout />
      <form className="edit" onSubmit={handleSubmit}>
        <div className="profile">
        <img
            className="preview-image"
            src={preview || img}
            alt="Preview"
            onClick={handleImageClick}
            />
        <input
            ref={fileInputRef}
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            onChange={handleImage}
            />
        </div>
        <div className="list">
          <ol>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleName} />
            <div>
              <label>2차인증</label>
                {
                  auth ?
                  <input type="checkbox" checked={auth} defaultChecked disabled /> :
                  <>
                    <input type="checkbox" defaultChecked disabled />
                    <button onClick={handleAuth}>2차 인증하기</button>
                  </>
                }
            </div>
            <div>
              <button type="submit">edit</button>
            </div>
          </ol>
        </div>
        </form>
    </>
  );
};

export default SetProfile;