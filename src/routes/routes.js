import configs from "../configs";

import {
  Home,
  Agents,
  Maps,
  News,
  Media,
  Inventory,
  AgentDetails,
  WeaponDetails,
  PlayerCardDetails,
} from "../pages";

const myRoutes = [
  { path: configs.routes.home, component: Home },
  { path: configs.routes.agents, component: Agents },
  { path: configs.routes.agent_details, component: AgentDetails },
  { path: configs.routes.inventory, component: Inventory },
  { path: configs.routes.weapons, component: WeaponDetails },
  { path: configs.routes.player_cards, component: PlayerCardDetails },
  { path: configs.routes.maps, component: Maps },
  { path: configs.routes.news, component: News },
  { path: configs.routes.media, component: Media },
];

export { myRoutes };
