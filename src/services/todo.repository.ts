import { Repository, EntityRepository } from 'typeorm'
import {TodoEntity} from "../entity/todo-entity";

@EntityRepository(TodoEntity)
export class TodoRepository extends Repository<TodoEntity> {

    async findById (todoId: number) {
        const res = await this.query(`Select * from todo where id = ${todoId}`)
        if(res.length > 0) {
            return res[0]
        }

        return null

    }
}
