import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

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
