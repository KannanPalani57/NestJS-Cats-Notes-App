import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from "@nestjs/typeorm"
import { Connection } from "typeorm"

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot()],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
