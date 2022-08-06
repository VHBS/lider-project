import express, { Router } from 'express';
import cors from 'cors';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  public addRouter(router: Router): void {
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
  }
}
