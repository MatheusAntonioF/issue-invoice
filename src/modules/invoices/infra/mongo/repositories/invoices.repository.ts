import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InvoicesRepositoryContract } from 'src/modules/invoices/contract/invoices-repository.contract';
import { CreateInvoiceDTO } from 'src/modules/invoices/dtos/create-invoice.dto';
import { Invoice, InvoiceDocument } from '../entities/invoice.entity';

@Injectable()
export class InvoicesRepository implements InvoicesRepositoryContract {
  constructor(
    @InjectModel(Invoice.name)
    private readonly invoiceModel: Model<InvoiceDocument>,
  ) {}

  async create(data: CreateInvoiceDTO): Promise<InvoiceDocument> {
    const createdInvoice = await this.invoiceModel.create(data);

    return createdInvoice;
  }
}
