export interface BaseTable {
  id: string
  created_at: string
  updated_at: string
  company_id: string
}

export interface Customer extends BaseTable {
  first_name: string
  last_name: string
  email: string
  phone: string
}

export interface Property extends BaseTable {
  customer_id: string
  address: string
  city: string
  state: string
  zip: string
}

export interface Equipment extends BaseTable {
  property_id: string
  make: string
  model: string
  serial_number: string
  installation_date: string
}

export interface Job extends BaseTable {
  customer_id: string
  property_id: string
  status: string
  scheduled_start: string
  scheduled_end: string
  technician_id: string
}

export interface JobNote extends BaseTable {
  job_id: string
  content: string
  author_id: string
}

export interface JobPhoto extends BaseTable {
  job_id: string
  url: string
  description: string
}

export interface Estimate extends BaseTable {
  job_id: string
  customer_id: string
  status: string
  total: number
}

export interface EstimateOption extends BaseTable {
  estimate_id: string
  name: string
  total: number
}

export interface EstimateLineItem extends BaseTable {
  estimate_option_id: string
  description: string
  quantity: number
  unit_price: number
}

export interface Invoice extends BaseTable {
  job_id: string
  customer_id: string
  status: string
  total: number
}

export interface InvoiceLineItem extends BaseTable {
  invoice_id: string
  description: string
  quantity: number
  unit_price: number
}

export interface Payment extends BaseTable {
  invoice_id: string
  amount: number
  payment_method: string
  status: string
}

export interface PricebookItem extends BaseTable {
  name: string
  description: string
  price: number
  category: string
}

export interface ServiceAgreement extends BaseTable {
  customer_id: string
  property_id: string
  start_date: string
  end_date: string
  status: string
}

export interface AgreementVisit extends BaseTable {
  agreement_id: string
  scheduled_date: string
  status: string
}

export interface Technician extends BaseTable {
  user_id: string
  name: string
  color: string
}

export interface CompanySettings extends BaseTable {
  name: string
  logo_url: string
  timezone: string
}
