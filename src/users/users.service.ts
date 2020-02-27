import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { User } from './user';

@Injectable()
export class UsersService {
  private repo: Repository<User>;

  constructor(private readonly connection: Connection) {
    this.repo = this.connection.getRepository(User);
  }

  getAllUsers(): Promise<User[]> {
    return this.repo.find();
  }

  getUser(id: string): Promise<User> {
    return this.repo.findOneOrFail({ id: id });
  }

  createUser(user: User): Promise<User> {
    return this.repo.save(user);
  }

  updateUser(user: User): Promise<User> {
    if (!user.id) {
      throw new UnprocessableEntityException('Cannot update a user without an ID');
    }

    return this.repo.save(user);
  }

  async deleteUser(id: string): Promise<User> {
    const user: User = await this.getUser(id);

    return this.repo.remove(user);
  }
}
