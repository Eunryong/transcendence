import React from "react";
import { useState } from "react";
import axios from "axios";
import './SetProfile.css';
import noimg from "./image/noimg.gif";
import Layout from "./Layout/Layout";

//intra id

function EditProfile() {
    const [name, setName] = useState("");
    const [image, setImage] = useState<File | null>(noimg);
    const [preview, setPreview] = useState<string | null>(noimg);

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    
    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setImage(file);
            previewImage(file);
        } else {
            setImage(noimg);
            previewImage(null);
        }
    };

    const previewImage = (image: File | null) => {
        if (!image) {
            setPreview(noimg);
            return ;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(image);
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!image) return;
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", image);
        axios.post("back" ,formData);
        console.log(formData);
        console.log(image);
    };

    return (
        <>
            <Layout />
            <form className="setprofile" onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleName} />
                </div>
                <div>
                    <input type="file"
                    accept="image/jpg,image/png,image/jpeg,image/gif"
                    name="profile_image"
                    onChange={handleImage}>
                    </input>
                    {preview && <img className="preview" src={preview} alt="Preview" />}
                </div>
                <button type="submit">edit</button>
            </form>
        </>
    );
};

export default EditProfile;