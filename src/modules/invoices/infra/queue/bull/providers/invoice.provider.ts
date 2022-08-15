import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

import { InjectQueue } from '@nestjs/bull';
import { QueueProviderContract } from 'src/modules/invoices/contract/queue-provider.contract';

@Injectable()
export class BullProvider implements QueueProviderContract {
  constructor(@InjectQueue('invoices') private readonly invoicesQueue: Queue) {}

  async add(invoice_id: string): Promise<void> {
    await this.invoicesQueue.add({
      invoice_id,
    });
  }
}
