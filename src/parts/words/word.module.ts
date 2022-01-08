import {Module} from "@nestjs/common"
import {WordController} from "./word.controller"
import {WordService} from "./word.service"
import {TypeOrmModule} from "@nestjs/typeorm"
import {Word} from "../../entities/word"

@Module({
    controllers: [WordController],
    providers: [WordService],
    imports: [TypeOrmModule.forFeature([Word])]
})
export class WordModule {

}