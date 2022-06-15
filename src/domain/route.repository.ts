import { Route } from './route.entity';

export interface RouteRepositoryInterface {
  insert: (route: Route) => Promise<void>;
  findAll: () => Promise<Route[]>
}

// DIP - o principio da inversao de dependencia