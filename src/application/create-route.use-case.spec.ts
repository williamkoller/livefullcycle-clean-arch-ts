import { RouteInMemoryRepository } from '../infra/db/route-in-memory.repository';
import { CreateRouteUseCase } from './create-route.use-case';

describe('CreateRouteUseCase Test', () => {
  it('should create a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);
    const output = await createUseCase.execute({
      title: 'my title',
      startPosition: { lat: 1, lng: 3 },
      endPosition: { lat: 2, lng: 4 },
    });
    expect(repository.items).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      title: 'my title',
      startPosition: { lat: 1, lng: 3 },
      endPosition: { lat: 2, lng: 4 },
      points: [],
    });
  });
});
