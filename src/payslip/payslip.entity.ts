import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('py-payslip2')
export class Payslip {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 6 })
  pay_year: string;

  @Column({ type: 'varchar', length: 10 })
  pay_month: string;

  @Column({ type: 'varchar', length: 50 })
  BP: string;

  @Column({ type: 'varchar', length: 50 })
  NUMB: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  work_station: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  bpc: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  bpa: string;

  @Column({ type: 'decimal', precision: 10, scale: 0 })
  BPM: number;

  @Column({ type: 'decimal', precision: 10, scale: 0 })
  loan: number;

  @Column({ type: 'int' })
  ltenor: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  lbal: number;

  @Column({ type: 'int' })
  lmth: number;

  @Column({ type: 'varchar', length: 40 })
  tpcoy: string;

  @Column({ type: 'varchar', length: 70, nullable: true })
  tpaddr: string;

  @Column({ type: 'varchar', length: 15 })
  title: string;

  @Column({ type: 'varchar', length: 20 })
  surname: string;

  @Column({ type: 'varchar', length: 40 })
  othername: string;

  @Column({ type: 'varchar', length: 20, nullable: true})
  bankacnumber: string;

  @Column({ type: 'varchar', length: 70, nullable: true})
  bankname: string;

  @Column({ type: 'varchar', length: 4, nullable: true })
  gradelevel: string;

  @Column({ type: 'varchar', length: 10 , nullable: true})
  gradetype: string;

  @Column({ type: 'decimal', precision: 10, scale: 0 , nullable: true})
  prvtaxtodate: number;

  @Column({ type: 'decimal', precision: 10, scale: 0 , nullable: true})
  taxtodate: number;

  @Column({ type: 'decimal', precision: 10, scale: 0 , nullable: true})
  grstodate: number;

  @Column({ type: 'decimal', precision: 10, scale: 0 , nullable: true})
  freetodate: number;

  @Column({ type: 'decimal', precision: 10, scale: 0 , nullable: true})
  txbltodate: number;

  @Column({ type: 'decimal', precision: 10, scale: 0 , nullable: true})
  currtax: number;

  @Column({ type: 'decimal', precision: 10, scale: 0,  nullable: true })
  netpay: number;

  @Column({ type: 'varchar', length: 10 , nullable: true})
  groupcode: string;

  @Column({ type: 'varchar', length: 70, nullable: true })
  factory: string;

  @Column({ type: 'varchar', length: 70 , nullable: true})
  location: string;

  @Column({ type: 'varchar', length: 50 , nullable: true})
  nsitf: string;

  @Column({ type: 'varchar', length: 20 , nullable: true})
  nsitfcode: string;

  @Column({ type: 'varchar', length: 50 , nullable: true})
  email: string;

  @Column({ type: 'int' })
  status: number;

  @Column({ type: 'varchar', length: 2 })
  payclass: string;
}
