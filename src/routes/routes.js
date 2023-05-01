import configs from "../configs";

import { Home, Agents, Maps, News, Media, Weapons } from "../pages";

const myRoutes = [
  { path: configs.routes.home, component: Home },
  { path: configs.routes.agents, component: Agents },
  { path: configs.routes.maps, component: Maps },
  { path: configs.routes.news, component: News },
  { path: configs.routes.media, component: Media },
  { path: configs.routes.weapons, component: Weapons },
];

export { myRoutes };
