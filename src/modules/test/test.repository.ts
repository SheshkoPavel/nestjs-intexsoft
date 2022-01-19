import { Repository, EntityRepository } from 'typeorm'
import { TestEntity } from '../../entity/test-entity'

@EntityRepository(TestEntity)
export class TestRepository extends Repository<TestEntity> {
}
