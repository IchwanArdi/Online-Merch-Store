import x from '../../assets/twitter.png';
import ig from '../../assets/instagram.png';
import yt from '../../assets/youtube.png';

export default function Footer() {
  return (
    <section className="bg-slate-900 pt-20 px-4 md:px-10">
      <div className="container mx-auto">
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
          {/* Logo + Socials */}
          <div>
            <h3 className="mb-5 text-md md:text-2xl font-bold tracking-widest">ICHWAN ARDI</h3>
            <ul className="flex space-x-6 items-center">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={ig} alt="Instagram" className=" w-5 md:w-7 hover:opacity-75 transition invert" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={x} alt="Twitter/X" className=" w-5 md:w-6 hover:opacity-75 transition invert" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <img src={yt} alt="YouTube" className=" w-5 md:w-7 hover:opacity-75 transition invert" />
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="mb-5 text-md md:text-2xl font-bold tracking-widest">SUPPORT</h3>
            <span className="text-sm md:text-base block mb-3">Returns & Refunds</span>
            <span className="text-sm md:text-base">Find My Order</span>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="mb-5 text-md md:text-2xl font-bold tracking-widest">POLICIES</h3>
            <span className="text-sm md:text-base block mb-3">Terms of Service</span>
            <span className="text-sm md:text-base">Privacy Policy</span>
          </div>
        </footer>

        <hr className="border-slate-700 my-10" />

        <div className="flex justify-center ">
          <span className="text-center text-sm text-white mb-10">© 2025 ICHWAN ARDI</span>
        </div>
      </div>
    </section>
  );
}
