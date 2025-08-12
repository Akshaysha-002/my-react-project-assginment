import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-global-1">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-global-1 font-quicksand font-bold text-lg">
                VAYUZ
              </h3>
              <p className="text-global-2 font-quicksand font-medium text-sm leading-6">
                Professional Flutter development services for cross-platform mobile applications.
              </p>
            </div>

            {/* Services */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-global-1 font-quicksand font-bold text-base">
                Services
              </h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-global-2 hover:text-global-1 font-quicksand font-medium text-sm transition-colors">
                  App Development
                </a>
                <a href="#" className="text-global-2 hover:text-global-1 font-quicksand font-medium text-sm transition-colors">
                  UI/UX Design
                </a>
                <a href="#" className="text-global-2 hover:text-global-1 font-quicksand font-medium text-sm transition-colors">
                  Consulting
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-global-1 font-quicksand font-bold text-base">
                Contact
              </h4>
              <div className="flex flex-col space-y-2">
                <p className="text-global-2 font-quicksand font-medium text-sm">
                  info@vayuz.com
                </p>
                <p className="text-global-2 font-quicksand font-medium text-sm">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-global-4 mt-8 pt-8">
            <p className="text-global-2 font-quicksand font-medium text-sm text-center">
              © 2024 VAYUZ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;