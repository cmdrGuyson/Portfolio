import type { Metadata } from "next";
import Contact from "@/components/contact";
import Head from "@/components/head";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in contact with me. Let's share ideas and build cool things",
};

export default function ContactPage() {
  return (
    <Head>
      <Contact />
    </Head>
  );
}
