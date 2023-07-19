import { Test } from "@nestjs/testing"
import { UsersController } from "../users.controller"
import { UsersService } from "../users.service"

describe('usersController', () => {
    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [UsersController],
            providers: [UsersService]
        }).compile();
    })
})