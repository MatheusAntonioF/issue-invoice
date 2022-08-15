import { CreateInvoiceDTO } from '../dtos/create-invoice.dto';
import { InvoiceDocument } from '../infra/mongo/entities/invoice.entity';

export abstract class InvoicesRepositoryContract {
  abstract create(data: CreateInvoiceDTO): Promise<InvoiceDocument>;
}
