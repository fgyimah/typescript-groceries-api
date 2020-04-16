import 'dotenv/config';
import { startServer } from './server';
import { connectDB } from './database';

(async () => {
  await connectDB();
  await startServer();
})();
