import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn({
        type: 'integer'
    })
    id: number

    @Column({
        type: 'varchar'
    })
    login: string

    @Column({
        type: 'varchar'
    })
    pass: string
}
