import { Body, Controller, Get, Param, ParseIntPipe, Patch,Post,Delete } from '@nestjs/common';
import { AccountingLineService } from '../services';
import { AccountingLineDto } from '../dto';

@Controller('/accounting-lines')
export class AccountingLineController {
  constructor(private readonly accountingLineService: AccountingLineService) {}

  @Get('/:id')
  async findById(@Param('id', ParseIntPipe) accountingLineId: number) {
    return this.accountingLineService.findById(accountingLineId);
  }

  @Patch('/:id')
  async update(@Param('id', ParseIntPipe) accountingLineId: number, @Body() values: Partial<AccountingLineDto>) {
    return this.accountingLineService.update(accountingLineId, values);
  }


  @Post('create')
  async create(@Body() lineData: AccountingLineDto): Promise<AccountingLineDto> {
    return this.accountingLineService.create(lineData);
  }  

  @Delete(':id/delete')
  async delete(@Param('id') id:number): Promise<Boolean> {
    return this.accountingLineService.delete(id);
  }  

  @Get('/:clientId/:dateStart/:dateEnd/find')
  async findLinesBetweenTwoDates(@Param('clientId')clientId:number,@Param('dateStart') dateStart:Date,@Param('dateEnd')dateEnd:Date): Promise<AccountingLineDto[]> {


    return this.accountingLineService.findLinesBetweenTwoDates(Number(clientId), new Date(dateStart),new Date(dateEnd));
  }

  @Get('/:clientId/:dateStart/:dateEnd/sum')
  async sumAmountsBetweenTwoDates(@Param('clientId')clientId: number,@Param('dateStart') dateStart:Date,@Param('dateEnd')dateEnd:Date){
    return this.accountingLineService.sumAmountsBetweenTwoDates(Number(clientId), new Date(dateStart),new Date(dateEnd))
  }
}
