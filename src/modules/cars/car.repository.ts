import { Injectable } from '@nestjs/common';
import { ICar } from '../../common/interfaces/car.interface';
import { Client } from 'pg';
import { DatabaseException, DbClientService } from '../../common';

@Injectable()
export class CarRepository {
  client: Client;
  constructor(private dbService: DbClientService) {
    this.client = this.dbService.getClient();
  }
  async getCarById(carId: number): Promise<ICar> {
    try {
      const result = await this.client.query(`select *
          from cars
          where id = ${carId}
         `);
      return result.rows[0];
    } catch (err) {
      throw new DatabaseException();
    }
  }

  async getAll(): Promise<ICar[]> {
    try {
      const result = await this.client.query(`select *
      from cars`);
      return result.rows;
    } catch (err) {
      throw new DatabaseException();
    }
  }
}
