import {Module} from '@nestjs/common'
import {AppService} from './app.service'
import {TypeOrmModule} from "@nestjs/typeorm"
import {WordModule} from "../words/word.module"
import {Word} from "../../entities/word"

@Module({
    imports: [ TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'english-learn',
        entities: [Word],
        synchronize: true,
    }),
        WordModule
    ],
    providers: [AppService],
})
export class AppModule {
}
