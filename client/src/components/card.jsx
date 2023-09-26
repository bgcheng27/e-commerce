export default function Card({ product }) {
  return (
    <>
      <h2>{product.name}</h2>
      <ul>
        <li>Category: {product.category}</li>
        <li>Description: {product.description}</li>
        <li>Price: {product.price}</li>
        <li>Seller: {product.username}</li>
      </ul>
    </>
  )
}