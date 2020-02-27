import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MaxLength } from 'class-validator';

@ObjectType()
@Entity()
export class User {
  @ApiProperty()
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @MaxLength(10)
  @Column({ nullable: true })
  @ApiProperty({ maximum: 10 })
  firstName?: string;

  @Column()
  @Field()
  @ApiProperty()
  lastName: string;

  @Column({ nullable: true })
  @Field()
  @ApiProperty()
  position?: string;
}
