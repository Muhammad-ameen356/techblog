import React from "react";
import style from "../../app/styles/home.module.css";
import Blog from "../../components/atoms/Blog";
import axios from "axios";
import getAllUser from "@/lib/post";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  content: string;
  user: {
    username: string;
  };
}

const Blogs = async () => {
  const allBlogs = await getBlogs();

  return (
    <div className={style.mainContainer}>
      <div className={style.innerContainer}>
        <div className={style.firstContainer}>
          {allBlogs?.data?.map((blog: Blog) => (
            <Blog key={blog._id} data={blog} />
          ))}
        </div>
        <div className={style.secondContainer}>
          <div className={style.blogContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

export async function getBlogs() {
  const res = await axios.get("http://localhost:3000/api/admin/blog");

  return res.data;
}
