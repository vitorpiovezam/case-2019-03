import { MedicineRepository } from './medicine.repository';
import {
  Controller,
  Get,
} from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { Medicine } from './entities/medicine.entity';
import * as medicamentosRaw from 'src/dados/medicamentos.json';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('/api/medicine')
export class MedicineController {
  constructor(
    @InjectRepository(Medicine)
    private medicineRepository: MedicineRepository
  ) {}

  @Get('/import')
  async import(): Promise<any> {
    const medicamentos: Medicine[] = (medicamentosRaw as any[]).map(item => new Medicine(item));
    console.log(medicamentos[0]);
    console.log(medicamentos[1]);
    this.medicineRepository.save(medicamentos, { chunk: medicamentos.length / 50 });

    return {
      body: 'saving!'
    }
  }
}
