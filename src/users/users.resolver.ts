import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './user';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Query(() => User)
  async user(
    @Args('id')
    id: string,
  ): Promise<User> {
    return this.usersService.getUser(id);
  }
}
