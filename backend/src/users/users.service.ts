import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class UsersService {
    
    constructor(@InjectConnection()  private readonly connection : Connection){}

    getAllUsers(){
        const users = this.connection.db?.collection('users').find().toArray();
        return users
    }

    getUserById(id: string){
        const user = this.connection.db?.collection('users').findOne({ id: id });
        return user
    }

}
