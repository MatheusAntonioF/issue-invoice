import { Injectable, Logger } from '@nestjs/common';

Injectable();
export class ProcessInvoiceQueueUseCase {
  private readonly logger = new Logger(ProcessInvoiceQueueUseCase.name);

  async execute(invoice_id: string) {
    this.logger.debug(invoice_id);
  }
}
