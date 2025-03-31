import Music from "@/components/music";
import Hero from "@/components/hero";
import Layout from "@/components/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gayanga Kuruppu",
  description: "Come drink the Kool-aid with me :)",
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Music />
    </Layout>
  );
}
