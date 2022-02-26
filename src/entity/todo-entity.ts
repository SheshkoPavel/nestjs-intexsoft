import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {UserEntity} from "./user-entity";

@Entity({ name: 'todo' })
export class TodoEntity {
    @PrimaryGeneratedColumn({
        type: 'integer'
    })
    id: number

    @Column({
        type: 'varchar'
    })
    name?: string

}
