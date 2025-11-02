import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { PostsService } from './posts/services/posts.service';
import { AuthModule } from './auth/auth.module';
// import {} from 'nest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
// import { PostEntity } from './posts/post.entity';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'nestlearn',
        password: 'nestlearn',
        database: 'nestlearn',
        // entities: [__dirname + '/**/*.entity{.ts,.js}'],
        entities: [User],
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
