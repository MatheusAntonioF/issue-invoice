export abstract class QueueProviderContract {
  abstract add(invoice_id: string): Promise<void>;
}
