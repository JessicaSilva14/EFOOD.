export interface DeliveryData {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: string
    complement: string
  }
}

export interface PaymentData {
  card: {
    name: string
    number: string
    code: string
    expires: {
      month: string
      year: string
    }
  }
}
