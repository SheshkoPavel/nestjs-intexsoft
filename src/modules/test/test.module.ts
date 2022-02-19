import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './test.controller';
import {TestEntity} from "../../entity/test-entity";
import {TestService} from "./test.service";
import {TestRepository} from "./test.repository";
import {TodoController} from './todo.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([TestEntity, TestRepository])
    ],
    controllers: [TestController, TodoController],
    providers: [TestService]
})
export class TestModule {}
