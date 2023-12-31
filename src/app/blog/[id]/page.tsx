import { Navbar } from "@/components";
import React from "react";
import style from "../../styles/blog.module.css";

const BlogById = async ({ params: { id } }: any) => {
  const { data } = await getBlogById(id);

  return (
    <>
      <Navbar />

      <div className={style.blogPage}>
        <div className={style.innerBlogPageContainer}>
          <p className={style.title}>{data?.title}</p>
          <div
            className={style.content}
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogById;

export async function generateStaticParams() {
  const allBlog = await fetch("http://localhost:3000/api/admin/blog").then(
    (res) => res.json()
  );

  console.log(allBlog, "allBlog");

  return allBlog?.data.map((allBlog: any) => ({
    id: allBlog._id.toString(),
  }));
}

async function getBlogById(id: string) {
  console.log("idid*****************************/n\n", id, "idid");
  const res = await fetch(`http://localhost:3000/api/admin/blog/${id}`);
  if (!res.ok) throw new Error("fail to fetch data");
  return res.json();
}
