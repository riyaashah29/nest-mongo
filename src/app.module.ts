import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://riyaa:riyaa@cluster0.3oboonb.mongodb.net/nest-mongo'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
