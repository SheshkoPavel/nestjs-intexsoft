import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {UserEntity} from "./user-entity";
import {JoinColumn} from "typeorm/browser";

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

    @ManyToOne(() => UserEntity, (user) => user.id, { nullable: true })
    user: UserEntity
}
