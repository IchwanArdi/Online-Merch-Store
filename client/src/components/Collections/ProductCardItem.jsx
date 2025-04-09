function ProductCardItem({ image, name, price, stock, isNew }) {
  return (
    <div className="card w-64 flex-shrink-0 hover:shadow-lg transition relative p-2">
      {stock === 0 && <span className="p-1 px-2 text-xs font-semibold text-white bg-red-700 absolute right-2 top-2 rounded">SOLD OUT</span>}
      {isNew && <span className="p-1 px-2 text-xs font-semibold text-white bg-red-700 absolute right-2 top-2 rounded">NEW</span>}
      <img src={image} alt={name} className="rounded-md" />
      <div className="pl-4 pt-2">
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">${price}</p>
      </div>
    </div>
  );
}

export default ProductCardItem;
