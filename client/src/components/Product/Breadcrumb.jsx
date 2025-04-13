// components/Breadcrumb.jsx
import { Link } from 'react-router-dom';

function Breadcrumb({ productName }) {
  return (
    <div className="text-sm text-gray-500 mb-6">
      <Link to="/" className="hover:underline">
        Home
      </Link>{' '}
      /{' '}
      <Link to="/collections/straight-edge-collection" className="hover:underline">
        Collections
      </Link>
      <span className="font-semibold text-gray-700"> / {productName}</span>
    </div>
  );
}

export default Breadcrumb;
