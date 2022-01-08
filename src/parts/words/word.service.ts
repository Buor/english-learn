import {Injectable} from "@nestjs/common"
import {Word} from "../../entities/word"
import {InjectRepository} from "@nestjs/typeorm"
import {Repository} from "typeorm"
import {IWordsDTO} from "../../types/typesWord"

@Injectable()
export class WordService {

    constructor(
        @InjectRepository(Word)
        private usersRepository: Repository<Word>,
    ) {
    }

    async getWords() {
        return await this.usersRepository.find()
    }

    async addWords(wordsDTO: IWordsDTO) {
        try {
            await Promise.all(wordsDTO.words.map(word => {
                const newWord: Word = this.usersRepository.create({word: word.word, translations: word.translations})
                return this.usersRepository.save(newWord)
            }))
        } catch (e) {
            console.log(e)
            return false
        }

        return true
    }
}