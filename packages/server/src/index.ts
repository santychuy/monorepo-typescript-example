import './config';
import app from './app';

(() => {
  app.listen(process.env.PORT);
  console.log(`>> Server on: http://localhost:${process.env.PORT}`);
})();
