import type { Metadata } from "next";
import Head from "@/components/head";
import Blog from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Interesting articles I've written recently",
};

export default function BlogPage() {
  return (
    <Head>
      <Blog />
    </Head>
  );
}
