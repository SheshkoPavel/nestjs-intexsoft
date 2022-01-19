import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity({ name: 'test' })
export class TestEntity {
    @PrimaryGeneratedColumn({
        type: 'integer'
    })
    id: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    title?: string

    // @Column({
    //     type: 'boolean',
    //     default: false
    // })
    // isComplete: boolean
}
