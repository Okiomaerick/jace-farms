import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.jpg'; // Make sure this matches your actual file name

const Hero = () => {
  return (
    <div className="relative bg-green-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-green-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Transforming Agriculture</span>
                <span className="block text-green-200">Through Innovation</span>
              </h1>
              <p className="mt-3 text-base text-green-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Empowering farmers with sustainable agricultural solutions and expert consultancy services to maximize productivity and profitability.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10"
                  >
                    Our Services
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Background image on the right side with overlay */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative">
        <div
          className="w-full h-full absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '32rem',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider mb-2">
              Jace Farms
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-green-200 font-medium">
              & Consultancy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
