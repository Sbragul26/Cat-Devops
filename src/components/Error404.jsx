import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="max-w-6xl font-roboto mx-auto py-6 px-4 sm:px-6 bg-white rounded-lg shadow-sm min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 text-center">
  404 - Page Not Found
</h1>


      <div className="flex flex-col gap-8 sm:gap-12 text-center">
        <div className="space-y-6">
          <p className="text-gray-600 text-xl sm:text-2xl">
            Oops! Looks like this page got lost in the code.
          </p>
          <p className="text-gray-600 text-lg sm:text-xl font-saira">
            The resource you’re looking for doesn’t exist or has been moved.
          </p>

          {/* Return Home Button */}
          <div className="flex flex-col gap-2 items-center">
            <p className="font-bold text-xl">Back to Safety:</p>
            <Link
              to="/"
              className="p-2 w-32 font-special text-center text-sm bg-black border border-zinc-200 text-white rounded-md hover:bg-gray-50 hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Home()
            </Link>
          </div>
        </div>

        {/* Footer section */}
        <div className="flex flex-col gap-4 mt-6 w-full">
          <div className="w-full border-2 border-gray-200"></div>
          <div className="text-black text-sm sm:text-base">
            <span>Copyright © 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}