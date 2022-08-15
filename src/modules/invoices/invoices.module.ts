import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from './infra/mongo/entities/invoice.entity';
import { InvoicesController } from './infra/http/controllers/invoices.controller';
import { CreateInvoiceUseCase } from './useCases/create-invoice.use-case';
import { InvoicesRepository } from './infra/mongo/repositories/invoices.repository';
import { AddInvoiceInAQueueUseCase } from './useCases/add-invoice-in-queue.use-case';
import { BullProvider } from './infra/queue/bull/providers/invoice.provider';
import { ProcessInvoiceQueueUseCase } from './useCases/process-invoice-queue.use-case';
import { InvoiceQueueConsumer } from './infra/queue/bull/consumers/invoice.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'invoices',
    }),
    MongooseModule.forFeature([
      {
        name: Invoice.name,
        schema: InvoiceSchema,
      },
    ]),
  ],
  controllers: [InvoicesController],
  providers: [
    {
      useClass: InvoicesRepository,
      provide: 'InvoicesRepository',
    },
    {
      useClass: BullProvider,
      provide: 'QueueProvider',
    },
    CreateInvoiceUseCase,
    AddInvoiceInAQueueUseCase,
    ProcessInvoiceQueueUseCase,
    InvoiceQueueConsumer,
  ],
})
export class InvoicesModule {}
