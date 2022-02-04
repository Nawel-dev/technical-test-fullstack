import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateAccountingLineTable, PopulateAccountingLineTable } from './migrations';
import { AccountingLineModel } from './models';
import { AccountingLineRepository } from './repositories';
import { AccountingLineController } from './controllers';
import { AccountingLineService } from './services';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: path.join(__dirname, '../data/accounting-database.sqlite'),
      migrations: [CreateAccountingLineTable, PopulateAccountingLineTable],
      migrationsRun: true,
      entities: [AccountingLineModel],
    }),
    TypeOrmModule.forFeature([AccountingLineRepository]),
  ],
  controllers: [AccountingLineController],
  providers: [AccountingLineService],
})
export class AccountingApiModule {
  static async bootstrap() {
    const app = await NestFactory.create(AccountingApiModule);

    const port = 3000;
    await app.listen(port, () => {
      console.log(`Accounting API is listening on port ${port}`);
    });
  }
}
