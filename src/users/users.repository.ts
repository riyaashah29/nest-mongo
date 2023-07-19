import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { FilterQuery, Model } from "mongoose";
import { EntityRepository } from "src/database/entity.repository";

@Injectable()
export class UsersRepository extends EntityRepository<UserDocument>{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
        super(userModel)
    }

}