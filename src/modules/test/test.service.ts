import { Injectable } from '@nestjs/common'
import { TestEntity } from '../../entity/test-entity';
import {TestRepository} from "./test.repository";

@Injectable()
export class TestService {
    constructor ( private readonly testRepository: TestRepository ) { }

    async getAll (): Promise<TestEntity[]> {
        return await this.testRepository.find()
    }
}
