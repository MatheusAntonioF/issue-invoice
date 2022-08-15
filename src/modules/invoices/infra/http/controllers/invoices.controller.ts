import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateInvoiceDTO } from 'src/modules/invoices/dtos/create-invoice.dto';
import { CreateInvoiceUseCase } from 'src/modules/invoices/useCases/create-invoice.use-case';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly createInvoiceUseCase: CreateInvoiceUseCase) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createInvoice: CreateInvoiceDTO) {
    return this.createInvoiceUseCase.execute(createInvoice);
  }
}
