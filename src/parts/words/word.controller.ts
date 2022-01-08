import {Body, Controller, Get, Post} from "@nestjs/common"
import {WordService} from "./word.service"
import {IWordsDTO} from "../../types/typesWord"

@Controller('word')
export class WordController {

    constructor(private wordService: WordService) {
    }

    @Get('words')
    async getWords() {
        // return await this.wordService.getWords()
        return 'as'
    }

    @Post('words')
    async addWords(@Body() wordsDTO: IWordsDTO) {
        return await this.wordService.addWords(wordsDTO)
    }

}