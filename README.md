# :rocket: Issue Invoice :rocket:

### Functional requirements

#### Core

- [ ] Get info to generate invoice.
- [ ] Save invoice.
- [ ] Send invoice to user.

#### Integration

- [ ] Create crawler(bot) to enter in website, put credentials and generate the invoice.
- [ ] Create a bot to send created invoice to user.

### Non functional requirements

- [ ] Use puppeteer to create the crawler.
- [ ] Use Whatsapp API to send the invoice to user.
- [ ] Use mongo db atlas as database

### To do

#### Generate invoice

- [ ] Create background job that will be executed by a cron expression.
      This will be a background job because can be it's a expensive process
