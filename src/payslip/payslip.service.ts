import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

    async findByYearAndMonth(payslip: PayslipRequestDto ): Promise<PayslipDto | {}> {
        const payslip_found = await this.payslipRepository.findOne({
            where: { pay_year: payslip.year, pay_month: payslip.month },
        });
        if (!payslip_found) {
            // Handle case where no matching payslip is found
            return {};
        }
        return payslip_found;
    }
}
