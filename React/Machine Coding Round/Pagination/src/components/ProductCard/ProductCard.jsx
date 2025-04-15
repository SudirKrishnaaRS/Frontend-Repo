import "./ProductCard.css";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ title, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default ProductCard;
