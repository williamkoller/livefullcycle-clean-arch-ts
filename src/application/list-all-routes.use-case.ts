import { LatLgn } from '../domain/route.entity';
import { RouteRepositoryInterface } from '../domain/route.repository';

// SRP

export class ListAllRoutesUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}
  async execute(): Promise<CreateRouteOuput> {
    const routes = await this.routeRepo.findAll();
    return routes.map((r) => r.toJSON());
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
}[];
