"use client";

import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface FormData {
  title: string;
  content: string;
  author: string;
  category: string;
}

const CreateBlogForm: React.FC = () => {
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { title, content } = formData;

    const {
      data: { data },
    }: any = await axios.get("/api/admin/me");

    const payload = {
      title,
      content: value,
      userId: data._id,
    };

    const post = await axios.post("/api/admin/blog", payload);

    // Reset the form fields
    setFormData({
      title: "",
      content: "",
      author: "",
      category: "",
    });
    setValue("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="mb-4 md:col-span-1 sm:col-span-2">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter the title of your blog"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 md:col-span-1 sm:col-span-2">
          <label
            htmlFor="author"
            className="block text-gray-700 font-bold mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>
        <div className="col-span-2 ">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content
          </label>
          {/* <textarea
            id="content"
            name="content"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder="Write your blog post content here"
            value={formData.content}
            onChange={handleChange}
            rows={6}
            required
          /> */}
          <div>
            <ReactQuill
              value={value}
              onChange={setValue}
              style={{ backgroundColor: "white" }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="col-span-2 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded mb-2"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
