import { Repository, EntityRepository } from 'typeorm'
import {TodoEntity} from '../../entity/todo-entity';

@EntityRepository(TodoEntity)
export class TodoRepository extends Repository<TodoEntity> {
}
