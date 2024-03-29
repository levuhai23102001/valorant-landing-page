import configs from "../configs";

import {
  Home,
  Agents,
  Maps,
  News,
  Media,
  Inventory,
  WeaponDetails,
  PlayerCardDetails,
} from "../pages";

const myRoutes = [
  { path: configs.routes.home, component: Home },
  { path: configs.routes.agents, component: Agents },
  { path: configs.routes.collection, component: Inventory },
  { path: configs.routes.weapons_detail, component: WeaponDetails },
  { path: configs.routes.player_card, component: PlayerCardDetails },
  { path: configs.routes.maps, component: Maps },
  { path: configs.routes.news, component: News },
  { path: configs.routes.media, component: Media },
];

export { myRoutes };
