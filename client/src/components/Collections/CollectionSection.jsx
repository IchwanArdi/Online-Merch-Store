import { Link } from 'react-router-dom';
function CollectionSection({ title, showViewAll = true, className = '', onViewAllClick }) {
  return (
    <section className={`mt-10 md:mt-24 md:px-3 ${className}`}>
      <div className="container mx-auto flex flex-wrap items-center py-3 p-5">
        <span className="mr-auto text-4xl lg:text-5xl font-extrabold">{title}</span>
        {showViewAll && (
          <span>
            <Link to="/collections/straight-edge-collection" className="hidden lg:flex text-lg cursor-pointer hover:underline" onClick={onViewAllClick}>
              View All
            </Link>
          </span>
        )}
      </div>
    </section>
  );
}

export default CollectionSection;
