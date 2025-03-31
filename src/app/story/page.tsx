import React from "react";
import Head from "@/components/head";
import Story from "@/components/story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story",
  description: "How things have progressed so far in my life",
};

export default function StoryPage() {
  return (
    <Head>
      <Story />
    </Head>
  );
}
