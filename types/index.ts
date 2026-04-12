export interface Product {
  id: string
  name: string
  brand: string
  price: number
  oldPrice?: number | null
  memory: string
  boostClock: string
  imageUrl: string
  stripeId?: string | null
}

export interface NewsArticle {
  id: string
  title: string
  content: string
  imageUrl: string
  createdAt: Date | string
}

export interface SupportTicket {
  id: string
  gpu: string
  problem: string
  details: string
  name: string
  email: string
  phone: string
}

export interface Order {
  id: string
  userId: string
  productId: string
  createdAt: Date | string
}
