import { Test, TestingModule } from '@nestjs/testing';
import { DeepPartial } from 'typeorm';
import { UsersController } from './users.controller';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let appController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            getAllUsers: () =>
              Promise.resolve([
                {
                  id: '1',
                  firstName: 'Cameron',
                  lastName: 'Spear',
                },
              ]),
          } as DeepPartial<UsersService>,
        },
      ],
    }).compile();

    appController = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return an array of users', async () => {
      expect(await appController.users()).toEqual([
        {
          id: '1',
          firstName: 'Cameron',
          lastName: 'Spear',
        },
      ]);
    });
  });
});
