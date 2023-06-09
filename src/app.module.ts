import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookModule } from './Employee/cook/cook.module';
import { DMModule } from './Employee/deliveryman/deliveryman.module';
import { ManagerModule } from './Employee/manager/manager.module';
import { WaiterModule } from './Employee/waiter/waiter.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ManagerModule, WaiterModule, DMModule, CookModule, TypeOrmModule.forRoot({
    // type:'postgres',
    // host: 'localhost',
    // port: 5432,
    // username: 'postgres',
    // password: 'hello',
    // database: 'RMS',
    // autoLoadEntities: true,
    // synchronize: true,})],
    type: 'postgres',
    host: 'containers-us-west-96.railway.app',
    port: 6448,
    username: 'postgres',
    password: 'Ifx7UMo8egMuYjodq93y',
    database: 'railway',
    autoLoadEntities: true,
    synchronize: true,
  }
  ),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '../public'), // added ../ to get one folder back
    serveRoot: '/public/' //last slash was important
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
