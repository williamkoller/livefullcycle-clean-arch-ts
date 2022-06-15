import { LatLgn, Route } from '../domain/route.entity';
import { RouteRepositoryInterface } from '../domain/route.repository'

// SRP

export class CreateRouteUseCase {
  constructor(private routeRepo: RouteRepositoryInterface){}
  async execute(input: CreateRouteInput): Promise<CreateRouteOuput> {
    const route = new Route(input);
    await this.routeRepo.insert(route)
    return route.toJSON();
  }
}

export type CreateRouteInput = {
  title: string;
  startPosition: LatLgn;
  endPosition: LatLgn;
  points?: LatLgn[];
};

export type CreateRouteOuput = {
  id: string;
  title: string;
  startPosition: LatLgn;
  endPosition: LatLgn;
  points?: LatLgn[];
};
