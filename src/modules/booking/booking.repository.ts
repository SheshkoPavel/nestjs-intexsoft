import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { DbClientService, DatabaseException, IBooking } from '../../common';

@Injectable()
export class BookingRepository {
  client: Client;

  constructor(private readonly dbService: DbClientService) {
    this.client = this.dbService.getClient();
  }

  public async bookCar(booking: IBooking): Promise<void> {
    try {
      await this.client
        .query(`insert into car_booking(auto_id, start_date, end_date)
									 values (${booking.autoId}, '${booking.startDate}', '${booking.endDate}')`);
    } catch (err) {
      throw new DatabaseException();
    }
  }

  public async getLastBookingByAutoId(autoId: number): Promise<string> {
    try {
      const res = await this.client.query(`select end_date
											   from car_booking
											   where auto_id = ${autoId}
											   order by end_date desc
											   limit 1`);
      const last = res.rows[0];
      return last ? last.end_date : undefined;
    } catch (err) {
      throw new DatabaseException();
    }
  }
}
