import express from 'express';
import config from './config/index.js';
import {userRoutes, productRoutes, orderRoutes} from './routes/index.js';


const api = express();

api.use(express.json());

api.get('/status', (req, res) => {
  return res.json({
    msg: 'Api funcionando',
  });
});

api.use(userRoutes)
api.use(productRoutes)
api.use(orderRoutes)

api.use((err, req, res, next) => {
    if (
      config.server.enviroment === 'development' ||
      config.server.enviroment === 'local' ||
      config.server.enviroment === 'test'
    ) {
      return res.status(500).json({
        msg: 'Error',
        error: err,
      });
    }
    return res.status(500).json({
      msg: 'Ha ocurrido un error en el server, comunícate con un desarrollador',
    });
  });
  
  export default api;