import express from 'express';
import userRouter from './routes/userRouter';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.config();
    this.app.use('/user', userRouter);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
  }
}

// const app = express();

// app.use(express.json());

// app.use('/user', user);

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
