import { Injectable } from '@nestjs/common';
import { AccountingLineRepository } from '../repositories';
import { AccountingLineDto } from '../dto';


@Injectable()
export class AccountingLineService {
  constructor(private readonly accountingLineRepository: AccountingLineRepository) { }

  async findById(id: number) {
    const accountingLines = await this.accountingLineRepository.findAll();

    return accountingLines.find(accountingLine => accountingLine.id == id);
  }

  update(id: number, values: Partial<AccountingLineDto>) {
    return this.accountingLineRepository.patch(id, values);
  }




  create(line: AccountingLineDto) {
    return this.accountingLineRepository.createLine(line)
  }

  delete(id: number): Boolean {
    this.accountingLineRepository.delete(id)
      .then((result) => {
        let affectedLines = result?.affected
        if (affectedLines) return true
      })
    return false;

  }


  async findLinesBetweenTwoDates(clientId: number, dateStart: Date, dateEnd: Date): Promise<AccountingLineDto[]> {

    let accountLines = await this.accountingLineRepository.findAll()
    let result = accountLines.filter(line => new Date(line.date) >= dateStart && new Date(line.date) < dateEnd && Number(line.companyId) === clientId)
    return Promise.resolve(result);
  }


  async sumAmountsBetweenTwoDates(clientId: number, dateStart: Date, dateEnd: Date) {
    let sum = 0;
    const lines = await this.findLinesBetweenTwoDates(clientId, dateStart, dateEnd);
    lines.forEach(line => {
      sum += line.amount;
    });

    return sum;
  }
}
