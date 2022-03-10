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

    search(searchText: string, userId: number, page: number, itemsPerPage: number) {
        const offset = (page - 1) * itemsPerPage;
        return this.query(`
        select *
        from todo
        where name LIKE '%${searchText}%'
          and "userId" = ${userId}
        offset ${offset}
        limit ${itemsPerPage}
        `)
    }

    getAmountItemsByCriteria(searchText: string, userId: number) {
        return this.query(`
            select count(*)
            from todo
            where name LIKE '%${searchText}%'
              and "userId" = ${userId}
        `)
    }

}
