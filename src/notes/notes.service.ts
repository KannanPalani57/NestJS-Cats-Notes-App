import { Injectable } from '@nestjs/common';
import { Notes } from './interface/notesInterface'

@Injectable()
export class NotesService {
    private readonly notes: Notes[] = [];

    create(note: Notes){
          this.notes.push(note)
    }
    findAll(): Notes[]{
        return this.notes;
    }
}
