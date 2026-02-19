import { categories } from '../data/categories'
import { products } from '../data/products'

const normalizeSlug = (value: string) => value.trim().toLowerCase()

export const useCatalog = () => {
  const getAllCategories = () => categories

  const getCategoryBySlug = (slug: string) =>
    categories.find((item) => item.slug === normalizeSlug(slug))

  const getFeaturedProducts = () => products.filter((item) => item.isFeatured)

  const getProductsByCategory = (slug: string) =>
    products.filter((item) => item.category === normalizeSlug(slug))

  const getProductBySlug = (slug: string) =>
    products.find((item) => item.slug === normalizeSlug(slug))

  const getRelatedProducts = (slug: string, categorySlug: string, limit = 4) =>
    products.filter((item) => item.slug !== slug && item.category === categorySlug).slice(0, limit)

  return {
    getAllCategories,
    getCategoryBySlug,
    getFeaturedProducts,
    getProductsByCategory,
    getProductBySlug,
    getRelatedProducts,
    products,
  }
}
