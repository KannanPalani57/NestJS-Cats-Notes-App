import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsController } from "./cats.controller";
import { LoggerMiddleware } from "./loggerMiddleWare"
import { CatsService } from "./cats.service"

@Module({
   controllers: [CatsController],
   providers: [CatsService]
})
export class CatsModule implements NestModule{
   configure(consumer: MiddlewareConsumer){
      consumer.apply(LoggerMiddleware).forRoutes({path: 'cats', method: RequestMethod.GET})
   }
}
