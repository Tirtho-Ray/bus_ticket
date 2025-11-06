/* eslint-disable no-console */
import { Server } from 'http';
import app from './app';
import  mongoose  from 'mongoose';
import config from './app/config';



let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.db_url as string);
    console.log(' Database connected successfully');
    // await seed();
    server = app.listen(config.port, () => {
      console.log(` Application is running on port ${config.port}`);
    });
  } catch (err) {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  }
}

bootstrap();

