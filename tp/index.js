import app from '../tp/app.js';
import * as mongoose from 'mongoose';

const port = 3000 || 8080;

const MONGODB_URL =
  'mongodb+srv://gonzalosanchez:hola123123@cluster0.zrttfst.mongodb.net/mcga-tp?retryWrites=true&w=majority' ||
  '';

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log({
      level: 'info',
      message: '✅ Database connected',
      label: 'mongo',
    });
    app.listen(port, () => {
      console.log({
        level: 'info',
        message: `Server listening on port ${port}`,
        label: 'server',
      });
    });
  })
  .catch((error) =>
    console.log({
      level: 'error',
      message: '🔴 Database error: ',
      errorData: error,
      label: 'mongo',
    })
  );
