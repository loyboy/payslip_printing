import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Payslip } from './payslip.entity';
import { PayslipDto } from './payslip-response.dto';
import { PayslipRequestDto } from './payslip-request.dto';

@Injectable()
export class PayslipService {
    constructor(
        @InjectRepository(Payslip)
        private payslipRepository: Repository<Payslip>,
    ) {}

    async findAll(): Promise<PayslipDto[]> {
        const payslips = await this.payslipRepository.find();
        return payslips
    }

    async findByYearAndMonth(payslip: PayslipRequestDto ): Promise<PayslipDto[] | []> {
        const payslip_found = await this.payslipRepository.find({
            where: { 
                NUMB: payslip.serviceno,
                pay_year: Like(`%${payslip.year.toLowerCase()}%`),
                pay_month: Like(`%${payslip.month.toLowerCase()}%`) 
            },
        });
        if (!payslip_found) {
            // Handle case where no matching payslip is found
            return [];
        }
        return payslip_found;
    }
}
