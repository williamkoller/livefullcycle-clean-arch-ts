import { LatLgn, Route, RouteProps } from './route.entity';

describe('Route Test', () => {
  it('should be defined constructor', () => {
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
    let route = new Route(routeProps);
    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    routeProps = {
      title: 'any_route',
      startPosition: {
        lat: 0,
        lng: 1,
      },
      endPosition: {
        lat: 2,
        lng: 3,
      },
      points: [
        {
          lat: 5,
          lng: 9,
        },
      ],
    };
    route = new Route(routeProps);

    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [
        {
          lat: 5,
          lng: 9,
        },
      ],
    });
  });

  it('should be updateTitle method', () => {
    const routeProps: RouteProps = {
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
    route.updateTitle('title updated');
    expect(route.title).toBe('title updated');
  });

  it('should be updatePosition method', () => {
    const routeProps: RouteProps = {
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
    const startPosition: LatLgn = {
      lat: 10,
      lng: 20,
    };
    const endPosition: LatLgn = {
      lat: 30,
      lng: 40,
    };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });
});
