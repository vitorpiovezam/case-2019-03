import { MedicineRepository } from './medicine.repository';
import {
  Controller,
  Get,
  Put,
  Query,
} from '@nestjs/common';
import { Medicine } from './entities/medicine.entity';
import * as medicamentosRaw from 'src/data/medicamentos.json';
import { InjectRepository } from '@nestjs/typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Controller('/api/medicine')
export class MedicineController {
  constructor(
    @InjectRepository(Medicine)
    private medicineRepository: MedicineRepository
  ) {}

  @Put('/import')
  async import(): Promise<any> {
    const medicamentos: Medicine[] = (medicamentosRaw as any[]).map(item => new Medicine(item));
    this.medicineRepository.save(medicamentos, { chunk: medicamentos.length / 1000 });

    return {
      body: `Bulking ${medicamentos.length} medicines, the data is on the way!`
    }
  }

  @Get('')
  async paginate(
    @Query()
    options: IPaginationOptions
  ): Promise<Pagination<Medicine>> {
    return paginate<Medicine>(this.medicineRepository, options);
  }
}
