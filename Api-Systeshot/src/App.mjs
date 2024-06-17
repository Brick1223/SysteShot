// src/App.mjs
import express from 'express';
import ClienteRoutes from './routes/ClientRoutes.mjs';
import AuthRoutes from './routes/AuthRoutes.mjs';
import EmpleadoRoutes from './routes/EmpleadoRoutes.mjs';
import GastoRoutes from './routes/GastoRoutes.mjs';
import PedidoRoutes from './routes/PedidoRoutes.mjs';
import ProductRoutes from './routes/ProductRoutes.mjs';

const app = express();

// Middleware para manejar el formato JSON en las solicitudes
app.use(express.json());

// Montar las rutas en la aplicación
app.use('/api/clientes', ClienteRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/empleados', EmpleadoRoutes);
app.use('/api/gastos', GastoRoutes);
app.use('/api/pedidos', PedidoRoutes);
app.use('/api/productos', ProductRoutes);

export default app;
