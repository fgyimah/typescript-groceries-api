import 'dotenv/config';
import { startServer } from './server';
import { connectDB } from './database';

startServer();
connectDB();
