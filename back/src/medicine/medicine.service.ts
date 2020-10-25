import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from './entities/medicine.entity';
import * as bcrypt from 'bcrypt';
import { BaseRepository } from 'src/shared/base.repository';

@Injectable()
export class MedicineService {
  constructor(
    @InjectRepository(Medicine)
    private readonly medicineRepository: BaseRepository<Medicine>,
  ) {}

  public async findByEmail(email: string): Promise<Medicine> {
    const medicine = await this.medicineRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!medicine) {
      throw new NotFoundException(`Medicine ${email} not found`);
    }

    return medicine;
  }

  public async findById(medicineId: string): Promise<Medicine> {
    const medicine = await this.medicineRepository.findOne({
      where: {
        id: medicineId,
      },
    });

    if (!medicine) {
      throw new NotFoundException(`Medicine #${medicineId} not found`);
    }

    return medicine;
  }
}
