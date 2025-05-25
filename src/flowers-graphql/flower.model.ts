import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FlowerModel {
  @Field(() => Int)
  id: string;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field(() => Float)
  price: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
