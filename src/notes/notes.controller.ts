import { Controller, Get, Post, Body } from '@nestjs/common';
import { Notes } from './interface/notesInterface'
import { NotesService } from "./notes.service"
import { NotesDto } from './notesDto/notesDto';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService){}

    @Get()
    async retrieve(): Promise<Notes[]>{
        return this.notesService.findAll();
    }

    @Post()
    postData(@Body() notesDto: NotesDto){
        this.notesService.create(notesDto)
    }
}
