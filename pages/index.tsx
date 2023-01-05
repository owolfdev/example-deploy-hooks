import { useEffect } from "react";
import Head from "next/head";

import { getPosts } from "./api/contentful";

export default function Index({ preview, allPosts }: any) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  useEffect(() => {
    console.log("allPosts", allPosts);
    console.log("preview", preview);
  }, [preview]);

  return (
    <div>
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="mt-5">
        {allPosts.map((post: any, index: number) => {
          return (
            <div className="border p-10" key={post.fields.slug}>
              <h2 className="text-2xl">{post.fields.title}</h2>
              <p>{post.fields.excerpt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getPosts()) ?? [];
  return {
    props: { preview, allPosts },
  };
}
