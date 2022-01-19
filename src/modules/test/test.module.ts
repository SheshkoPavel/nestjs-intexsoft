import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './test.controller';
import {TestEntity} from "../../entity/test-entity";
import {TestService} from "./test.service";
import {TestRepository} from "./test.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([TestEntity, TestRepository])
    ],
    controllers: [TestController],
    providers: [TestService]
})
export class TestModule {}
