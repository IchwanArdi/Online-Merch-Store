import { Link } from 'react-router-dom';

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

function ProductCardItem({ image, name, price, stock, isNew }) {
  const slug = slugify(name);
  return (
    <Link to={`/product/${slug}`} state={{ name, image, price, stock }}>
      <div className="card w-64 xl:w-96 xl:m-2 flex-shrink-0 hover:shadow-lg transition relative md:mt-5">
        {stock === 0 && <span className="p-1 px-2 text-xs font-semibold text-white bg-red-700 absolute right-2 top-2 rounded">SOLD OUT</span>}
        {isNew && <span className="p-1 px-2 text-xs font-semibold text-white bg-red-700 absolute right-2 top-2 rounded">NEW</span>}
        <img src={image} alt={name} className="rounded-md" />
        <div className="pl-4 pt-2">
          <h3 className="text-base font-semibold">{name}</h3>
          <h5 className="text-sm text-gray-600">{price}</h5>
        </div>
      </div>
    </Link>
  );
}

export default ProductCardItem;
