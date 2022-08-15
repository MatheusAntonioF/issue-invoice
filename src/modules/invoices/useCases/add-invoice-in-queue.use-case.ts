import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { QueueProviderContract } from '../contract/queue-provider.contract';

@Injectable()
export class AddInvoiceInAQueueUseCase {
  constructor(
    @Inject('QueueProvider')
    private readonly queueProvider: QueueProviderContract,
  ) {}

  async execute(invoice_id: string) {
    try {
      await this.queueProvider.add(invoice_id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
