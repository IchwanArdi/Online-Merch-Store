import { Link } from 'react-router-dom';

export default function Btn() {
  return (
    <div className="flex justify-center my-16 text-center ">
      <button className="py-3 px-6 text-white bg-slate-950 rounded cursor-pointer hover:bg-slate-800 transition-all duration-300 flex items-center">
        <div className="flex items-center gap-2 transition-transform duration-300 ">
          <span>
            <Link to="/collections/all-products" className="whitespace-nowrap">
              View All
            </Link>
          </span>
        </div>
      </button>
    </div>
  );
}
