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

import { categories } from "../api/valorantAPI";

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
    title: "Collection",
    path: "/collection",
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

export const sideBarMenu = [
  {
    title: "Side Arms",
    category: categories.sideArm,
  },
  {
    title: "SMGs",
    category: categories.smg,
  },
  {
    title: "Shot Guns",
    category: categories.shotgun,
  },
  {
    title: "Rifles",
    category: categories.rifle,
  },
  {
    title: "Rifle Snipers",
    category: categories.sniper,
  },
  {
    title: "Machine Guns",
    category: categories.heavy,
  },
  {
    title: "Melee",
    category: categories.melee,
  },
];
