import { MedicineRepository } from './medicine.repository';
import {
  Controller,
  Get,
} from '@nestjs/common';
import { Medicine } from './entities/medicine.entity';
import * as medicamentosRaw from 'src/dados/medicamentos.json';
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
    this.medicineRepository.save(medicamentos, { chunk: medicamentos.length / 1000 });

    return {
      body: `Bulking ${medicamentos.length} medicines ↕`
    }
  }
}
