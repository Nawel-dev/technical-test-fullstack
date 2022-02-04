import { EntityRepository, Repository , DeleteResult} from 'typeorm';
import { AccountingLineModel } from '../models';
import { AccountingLineDto } from '../dto';

@EntityRepository(AccountingLineModel)
export class AccountingLineRepository extends Repository<any> {

  async patch(id: number, values: Partial<AccountingLineDto>) {
    return this.save({
      id: id,
      ...values,
    });
  }


  async findAll(): Promise<AccountingLineDto[]> {
    return await this.find();
  }


  async createLine(line: AccountingLineDto): Promise<AccountingLineDto> {
    return await this.save(line);
  }


  async delete(id: number): Promise<DeleteResult> {
    return await this.delete(id);
  }


}
