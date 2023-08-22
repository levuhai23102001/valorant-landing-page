import configs from "../configs";

import { Home, Agents, Maps, News, Media, Inventory } from "../pages";

const myRoutes = [
  { path: configs.routes.home, component: Home },
  { path: configs.routes.agents, component: Agents },
  { path: configs.routes.collection, component: Inventory },
  { path: configs.routes.maps, component: Maps },
  { path: configs.routes.news, component: News },
  { path: configs.routes.media, component: Media },
];

export { myRoutes };
