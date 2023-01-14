import express, {json} from 'express';
import { initialize } from './repository.mjs';
import routes from './routes.mjs';
import cors from "cors";

const app = express(); 
app.use(cors());
app.use(json());
app.use('/api', routes);

const port = 8080;
app.listen(port, async () => {
    console.log(`Aplicatia ruleaza la portul ${port}`)
    try {
      await initialize();
    } catch (error) {
      console.error(error);
    }
});

app.get('/app_backend', (req, res) => {
  res.send({ express: 'BACKEND IS CONNECTED TO REACT BOSS' });
});

app.get('/', (req, res) => {
  res.send({ express: 'De ce faca asta!' });
});