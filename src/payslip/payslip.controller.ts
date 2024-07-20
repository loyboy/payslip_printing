import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
  } from '@nestjs/common';
  import { PayslipService } from './payslip.service';  
  import { PayslipDto } from './payslip-response.dto';
  import { PayslipRequestDto } from './payslip-request.dto';

  @Controller('payslip')
  export class PayslipController {
    constructor(private payslipService: PayslipService) {}
    
    @Get()
    async findAll(): Promise<PayslipDto[]> {
      return await this.payslipService.findAll();
    }

    @Post('findByYearAndMonth')
    async findByYearAndMonth(
      @Body() payslipBody: PayslipRequestDto,
    ): Promise<PayslipDto | {}> {
      return await this.payslipService.findByYearAndMonth(payslipBody);
    }
  }
  