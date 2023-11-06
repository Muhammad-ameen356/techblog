"use client";

import React from "react";
import style from "../../app/styles/home.module.css";
import { useRouter } from "next/navigation";

interface BlogProps {
  data: {
    title: string;
    content: string;
    _id: string;
    user: {
      username: string;
    };
  };
}
const Blog = ({ data }: BlogProps) => {
  const { username } = data.user;
  const router = useRouter();

  return (
    <div
      className={style.blogContainer}
      onClick={() => router.push(`/blog/${data._id}`)}
    >
      <p className={style.title}>{data?.title}</p>
      <div
        className={style.description}
        dangerouslySetInnerHTML={{ __html: data?.content }}
      />
      <div className={style.blogDetail}>
        <p>Author: {username}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Blog;
