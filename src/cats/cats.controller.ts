import { Controller, Get, Req, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { Request } from "express"
import { CatDto }  from "./catDto";
import { CatsService } from "./cats.service"
import { Cat } from './catInterface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

    @Post()
    async create(@Body() catDto: CatDto){
        this.catsService.create(catDto)
    } 

    @Get("cat/:id")
    async findOne(@Param('id', ParseIntPipe) id: number){
        return this.catsService.findAll();
    }

    

    @Get("")
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }


    // @Get('show')
    // Retrieve(@Req() request: Request): string{
    //     console.log(request.host)
    //     return "hello world from kannan "
    // }
       
    // @Post()
    // async create(@Body() catDto: CatDto){
    //     console.log(catDto.name)
    //     //database
        
    //     return `Cat name is ${catDto.name}, age is ${catDto.age} and cat skin is ${catDto.skin}`;
    // }          
}


