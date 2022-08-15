import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from './infra/mongo/entities/invoice.entity';
import { InvoicesController } from './infra/http/controllers/invoices.controller';
import { CreateInvoiceUseCase } from './useCases/create-invoice.use-case';
import { InvoicesRepository } from './infra/mongo/repositories/invoices.repository';

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
    CreateInvoiceUseCase,
  ],
})
export class InvoicesModule {}
