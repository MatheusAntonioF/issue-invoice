import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateInvoiceDTO } from 'src/modules/invoices/dtos/create-invoice.dto';
import { AddInvoiceInAQueueUseCase } from 'src/modules/invoices/useCases/add-invoice-in-queue.use-case';
import { CreateInvoiceUseCase } from 'src/modules/invoices/useCases/create-invoice.use-case';

@Controller('invoices')
export class InvoicesController {
  constructor(
    private readonly createInvoiceUseCase: CreateInvoiceUseCase,
    private readonly addInvoiceInQueue: AddInvoiceInAQueueUseCase,
  ) {}

  /**
   * This will be removed in the next version
   */
  @Get(':invoice_id')
  async show(@Param('invoice_id') invoice_id: string) {
    await this.addInvoiceInQueue.execute(invoice_id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createInvoice: CreateInvoiceDTO) {
    return this.createInvoiceUseCase.execute(createInvoice);
  }
}
