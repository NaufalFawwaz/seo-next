import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary2 text-white py-8 px-4 sm:px-8 lg:px-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold">Filkom Game Corner</h1>
          <div className="flex gap-4 mt-4">
            <div className="relative group cursor-pointer">
              <a href="https://filkom.ub.ac.id/" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="hover:scale-110 transition-transform duration-200 opacity-100 group-hover:opacity-100" size={24} />
              </a>
            </div>
            <div className="relative group cursor-pointer">
              <a href="https://www.facebook.com/filkombrawijaya/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:scale-110 transition-transform duration-200 opacity-100 group-hover:opacity-100" size={24} />
              </a>
            </div>
            <div className="relative group cursor-pointer">
              <a href="https://id.linkedin.com/company/filkombrawijaya" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:scale-110 transition-transform duration-200 opacity-100 group-hover:opacity-100" size={24} />
              </a>
            </div>
            <div className="relative group cursor-pointer">
              <a href="https://www.instagram.com/filkomub/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:scale-110 transition-transform duration-200 opacity-100 group-hover:opacity-100" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <h2 className="text-lg sm:text-xl font-semibold">ADDRESS</h2>
          <p className="mt-2 text-sm sm:text-base">
            Jl. Veteran, Ketawanggede,<br />
            Lowokwaru, Kota Malang,<br />
            Jawa Timur, Indonesia - 65145
          </p>
        </div>

        <div className="mr-10">
          <h2 className="text-lg sm:text-xl font-semibold">CONTACT</h2>
          <p className="mt-2 text-sm sm:text-base">Telp. 0341-577911</p>
          <p className="text-sm sm:text-base">Fax (0341) 577-911</p>
          <p className="text-sm sm:text-base">filkom@ub.ac.id</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
