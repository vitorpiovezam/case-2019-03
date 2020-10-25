import { Medicine } from './entities/medicine.entity';
import { BaseRepository } from 'src/shared/base.repository';

export class MedicineRepository extends BaseRepository<Medicine> {
  constructor() {
    super();
  }
}
