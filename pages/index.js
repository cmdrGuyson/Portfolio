import { useEffect, useState } from "react";
import Head from "../components/Head";
import FavouriteProjects from "../components/Music";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "service/getLatestRepos";
import data from "@constants/data";

export default function Home() {
  const [repositories, setRepositories] = useState([]);

  const fetchRepositories = async () => {
    const repositories = await getLatestRepos(data);
    setRepositories(repositories);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <Head
      title="Gayanga Kuruppu"
      description="Come drink the Kool-aid with me :)"
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </Head>
  );
}
