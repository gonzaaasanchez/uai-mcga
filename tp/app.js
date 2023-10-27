import express from 'express';
import productRouter from '../tp/routes/products/index.js';

var app = express();
app.use(express.json());

// Rutas de la app
app.use('/products', productRouter);

app.get('/', (_, res) => {
  res.status(200).send({
    message: 'Server is up ✅ - Environment: develop',
    data: undefined,
    error: false,
  });
});

export default app;
