import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(
    { isGlobal: true }
  ),
  MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest'),
  UsersModule
],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
