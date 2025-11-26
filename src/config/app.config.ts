import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  environment: process.env.NODE_ENV || 'production',
}));

// NOTE: we can manage it through just one files as well like below
// export const appConfig = () => ({
//   database: {
//     host: process.env.DATABASE_HOST || 'localhost',
//     port: parseInt(process.env.DATABSE_PORT ?? '5432'),
//     database: process.env.DATABASE_NAME,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     synchronize: process.env.DATABASE_SYNC === 'true' ? true : false,
//     autoLoadEntities: process.env.DATABASE_AUTOLOAD === 'true' ? true : false,
//   },
//   environment: process.env.NODE_ENV || 'production',
// });
