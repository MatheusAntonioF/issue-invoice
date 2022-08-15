import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsNumber,
  IsPostalCode,
} from 'class-validator';

class InvoiceAddress {
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: number;

  @IsNotEmpty()
  complement: string;

  @IsNotEmpty()
  neighborhood: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPostalCode('BR')
  zip_code: number;
}

export class CreateInvoiceDTO {
  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmptyObject()
  address: InvoiceAddress;

  @IsNotEmpty()
  @IsNumber()
  city_code: number;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  uf: string;

  @IsNotEmpty()
  @IsString()
  economic_activity: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;
}
