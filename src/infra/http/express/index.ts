import { RouteInMemoryRepository } from '../../../infra/db/route-in-memory.repository';
import express, { Express, Request, Response } from 'express';
import { ListAllRoutesUseCase } from '../../../application/list-all-routes.use-case';
import {
  CreateRouteOuput,
  CreateRouteUseCase,
} from '../../../application/create-route.use-case';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3003;

const routeRepo = new RouteInMemoryRepository();

app.get(
  '/routes',
  async (
    _req: Request,
    res: Response
  ): Promise<Response<CreateRouteOuput[]>> => {
    const listAllUseCase = new ListAllRoutesUseCase(routeRepo);
    const output = await listAllUseCase.execute();
    return res.status(200).json(output);
  }
);

app.post(
  '/routes',
  async (req: Request, res: Response): Promise<Response<CreateRouteOuput>> => {
    const createUseCase = new CreateRouteUseCase(routeRepo);
    const output = await createUseCase.execute(req.body);
    return res.status(201).json(output);
  }
);

app.listen(port, () => console.log(`server listen at port: ${port}`));
