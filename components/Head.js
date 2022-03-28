import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Header({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Gayanga Kuruppu",
    description: "Come drink the Kool-aid with me :)",
    icon: "/icon.png",
    image: "/logo.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://guyson.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://guyson.dev${router.asPath}`} />
        <link rel="shortcut icon" href={meta.icon} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="w-full dark:bg-gray-800">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
