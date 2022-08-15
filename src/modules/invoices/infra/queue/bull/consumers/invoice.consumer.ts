import { Process, Processor } from '@nestjs/bull';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { Job } from 'bull';
import { ProcessInvoiceQueueUseCase } from 'src/modules/invoices/useCases/process-invoice-queue.use-case';

@Processor('invoices')
export class InvoiceQueueConsumer {
  private readonly logger = new Logger(InvoiceQueueConsumer.name);

  constructor(
    private readonly processInvoiceQueueUseCase: ProcessInvoiceQueueUseCase,
  ) {}

  @Process()
  async execute({ data: { invoice_id } }: Job<{ invoice_id: string }>) {
    try {
      this.logger.debug(`Starting process invoice job - ${invoice_id}`);

      await this.processInvoiceQueueUseCase.execute(invoice_id);

      this.logger.debug(`Finished process invoice job - ${invoice_id}`);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
