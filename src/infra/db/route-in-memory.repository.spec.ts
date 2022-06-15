import { Route, RouteProps } from '../../domain/route.entity';
import { RouteInMemoryRepository } from './route-in-memory.repository';

describe('RouteInMemoryRepository Test', () => {
  it('should insert a new route', async () => {
    const repository = new RouteInMemoryRepository();
    let routeProps: RouteProps = {
      title: 'any_route',
      startPosition: {
        lat: 0,
        lng: 1,
      },
      endPosition: {
        lat: 2,
        lng: 3,
      },
    };
    const route = new Route(routeProps);
    await repository.insert(route);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
