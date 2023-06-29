import { newsBg1, newsBg2, newsBg3 } from "../assets";
import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  DiscordIcon,
} from "../components/Icons";

import {
  agentIcon,
  collectionIcon,
  homeIcon,
  mapsIcon,
  newsIcon,
} from "../assets";

export const mainMenuList = [
  {
    title: "Home",
    path: "/",
    img: homeIcon,
  },
  {
    title: "Agents",
    path: "/agents",
    img: agentIcon,
  },
  {
    title: "Inventory",
    path: "/inventory",
    img: collectionIcon,
  },
];

export const subMenuList = [
  {
    title: "Map",
    path: "/maps",
    img: mapsIcon,
  },
  {
    title: "News",
    path: "/news",
    img: newsIcon,
  },
  {
    title: "Media",
    path: "/media",
    img: mapsIcon,
  },
];

export const newsList = [
  {
    img: newsBg2,
    title: "Valorant patch notes 6.10",
  },
  {
    img: newsBg3,
    title: "Valorant Data drop: Phantom Vs. Vandal",
  },
  {
    img: newsBg1,
    title: "Challengers Ascension is coming!",
  },
];

export const socialList = [
  {
    icon: FacebookIcon,
    path: "http://www.facebook.com/Milky2310",
  },
  {
    icon: YoutubeIcon,
    path: "https://www.youtube.com/@VALORANTvn",
  },
  {
    icon: TwitterIcon,
    path: "https://twitter.com/iah_le",
  },
  {
    icon: InstagramIcon,
    path: "https://www.instagram.com/__.m1lkyy.__",
  },
  {
    icon: DiscordIcon,
    path: "https://discord.gg/uTNXaAh8",
  },
];
