export interface Product {
  id: number
  name: string
  slug: string
  price: number
  seller: string
  category: string
  categoryName: string
  imageUrl: string
  description: string
  whatsappNumber: string
  location: string
  isFeatured?: boolean
}

export interface Category {
  id: number
  name: string
  slug: string
  icon?: string
}
