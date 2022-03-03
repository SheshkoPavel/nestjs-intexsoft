import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {typeOrmConfigAsync} from "./config/configuration";
import {ControllerModule} from "./contollers/controller.module";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRootAsync(typeOrmConfigAsync),
        ControllerModule
    ],
    controllers: [AppController]
})
export class AppModule {
}
