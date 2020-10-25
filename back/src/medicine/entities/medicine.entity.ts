import { EntityBase } from 'src/shared/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Medicine extends EntityBase {
  @Column()
  IdMedicamento: number;

  @Column()
  Nome: string;

  @Column({ nullable: true })
  Farmaco?: string;

  @Column()
  Farmacos: string;
  
  @Column()
  Concentracao: string;

  @Column()
  Unidade: string

  @Column()
  TipoMedicamento: string;

  @Column()
  FormaFarmaceutica: string;

  @Column()
  ViaAdministracao: string;

  @Column()
  CodigoATC: string;

  @Column()
  UsoInterno: boolean;

  @Column()
  Antimicrobiano: boolean;

  @Column({ nullable: true })
  Bula?: string;

  @Column()
  Portaria344: string;

  @Column()
  ControleEspecial: boolean;

  @Column()
  TISS: string;

  @Column()
  MIP: boolean;

  @Column()
  Label: string;

  @Column({ nullable: true })
  Unificado?: string;

  constructor(data: any) {
    super();
    Object.assign(this, data);

    delete this.Label;
    if (data?.Farmacos) this.Farmacos = Array(data.Farmacos).join(',');
  }
}

