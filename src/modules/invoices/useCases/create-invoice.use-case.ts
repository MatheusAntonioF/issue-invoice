import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InvoicesRepositoryContract } from '../contract/invoices-repository.contract';
import { CreateInvoiceDTO } from '../dtos/create-invoice.dto';

@Injectable()
export class CreateInvoiceUseCase {
  constructor(
    @Inject('InvoicesRepository')
    private readonly invoicesRepository: InvoicesRepositoryContract,
  ) {}

  async execute(createInvoice: CreateInvoiceDTO) {
    try {
      const createdInvoice = await this.invoicesRepository.create(
        createInvoice,
      );

      return createdInvoice;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
