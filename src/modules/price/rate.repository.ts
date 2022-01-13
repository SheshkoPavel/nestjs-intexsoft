import { Injectable } from '@nestjs/common';
import { DatabaseException } from '../../common/exceptions/database.exception';
import { Client } from 'pg';
import { DbClientService, IRate } from '../../common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Injectable()
export class RateRepository {
  client: Client;

  constructor(private readonly dbService: DbClientService) {
    this.client = this.dbService.getClient();
  }

  public async getRateById(rateId: number): Promise<IRate> {
    try {
      const res = await this.client.query(
        `select * from rate where id=${rateId}`,
      );
      if (!res) {
        throw new HttpException('Auto does not exist', 400);
      }
      return res.rows[0];
    } catch (err) {
      throw new DatabaseException();
    }
  }
}
