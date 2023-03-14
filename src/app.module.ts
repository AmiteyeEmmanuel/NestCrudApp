// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import * as path from 'path';
// import { User } from './TypeOrm/entities/entity';
// import { UsersModule } from './users/users.module';
// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'Toristeju@123',
//       database: 'cruddb',
//       // entities: [path.join(__dirname, '**', '*.User.{ts,js}')],
//       entities: [User],
//       synchronize: true,
//     }),
//     UsersModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { User } from './user/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { EmployeesModule } from './employees/employees.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('host'),
        port: configService.get<number>('port'),
        username: configService.get('username'),
        password: configService.get('password'),
        database: configService.get('database'),
        // entities: [path.join(__dirname, '**', '*.User.{ts,js}')],
        entities: [User],
        synchronize: configService.get('synchronize'),
      }),
    }),
    UserModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
