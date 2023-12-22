import axios from "axios";

const getLatestRepos = async (data) => {
  try {
    const username = data.githubUsername;
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-desc`
    );
    let repos = res.data.items.filter((item) =>
      [
        "SmartMirror-mobile",
        "Avurudu-game",
        "Aether",
        "SmartMirror-raspberrypi",
        "MercedesMusic-server",
        "Labyrinth",
      ].includes(item.name)
    );
    let latestSixRepos = repos.splice(0, 6);
    return latestSixRepos;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
