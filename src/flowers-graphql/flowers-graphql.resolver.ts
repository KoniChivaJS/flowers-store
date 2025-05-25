import { Query, Resolver } from '@nestjs/graphql';
import { FlowersService } from 'src/flowers/flowers.service';
import { FlowerModel } from './flower.model';

@Resolver()
export class FlowersGraphqlResolver {
  constructor(private readonly flowersServide: FlowersService) {}

  @Query(() => [FlowerModel], { name: 'flowers' })
  findAll() {
    return this.flowersServide.findAll();
  }
}
