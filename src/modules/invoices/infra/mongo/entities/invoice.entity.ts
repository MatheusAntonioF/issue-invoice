import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Invoice {
  @Prop({ required: true })
  cnpj: string;

  @Prop({ required: true })
  name: string;

  @Prop(
    raw({
      street: {
        type: String,
      },
      number: {
        type: Number,
      },
      complement: {
        type: String,
      },
      neighborhood: {
        type: String,
      },
      zip_code: {
        type: String,
      },
    }),
  )
  address: Record<string | number, any>;

  @Prop({ required: true })
  city_code: number;
  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  uf: string;

  @Prop({ required: true })
  economic_activity: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  value: number;
}

export type InvoiceDocument = Invoice & Document;

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
