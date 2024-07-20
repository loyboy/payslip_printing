import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payslip')
export class Payslip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true })
    paye_name: string;

    @Column({ type: 'varchar', nullable: true })
    paye_title: string;

    @Column({ type: 'varchar', nullable: true })
    paye_service_no: string;

    @Column({ type: 'varchar', nullable: true })
    paye_bank: string;

    @Column({ type: 'varchar'})
    pay_month: string;

    @Column({ type: 'varchar'})
    pay_year: string;

    @Column({ type: 'varchar', nullable: true })
    paye_non_taxable: string;

    @Column({ type: 'varchar', nullable: true })
    paye_non_taxable_loan: string;

    @Column({ type: 'varchar', nullable: true })
    paye_consolidated_pay: string;

    @Column({ type: 'varchar', nullable: true })
    paye_consolidated_pay_loan: string;

    @Column({ type: 'varchar', nullable: true })
    paye_deductions: string;

    @Column({ type: 'varchar', nullable: true })
    paye_deductions_loan: string;

    @Column({ type: 'varchar', nullable: true })
    paye_national_housing_fund: string;

    @Column({ type: 'varchar', nullable: true })
    paye_national_housing_fund_loan: string;

    @Column({ type: 'varchar', nullable: true })
    paye_nn_cooperative: string;

    @Column({ type: 'varchar', nullable: true })
    paye_nn_cooperative_loan: string;

    @Column({ type: 'varchar', nullable: true })
    paye_tax: string;

    @Column({ type: 'varchar', nullable: true })
    paye_tax_loan: string;

    @Column({ type: 'varchar', nullable: true })
    paye_ippis_total: string;

    @Column({ type: 'varchar', nullable: true })
    paye_non_taxable_payment: string;

    @Column({ type: 'varchar', nullable: true })
    paye_diving_allowance: string;

    @Column({ type: 'varchar', nullable: true })
    paye_personal_allowance: string;

    @Column({ type: 'varchar', nullable: true })
    paye_rent_subsidy: string;

    @Column({ type: 'varchar', nullable: true })
    paye_scare_skill: string;

    @Column({ type: 'varchar', nullable: true })
    paye_other_payments: string;

    @Column({ type: 'varchar', nullable: true })
    paye_net_payment: string;
}
