import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InfoContact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        className="ps-[70px] pe-[70px] text-white mt-0 "
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-delay={200}
        data-aos-offset={100}
      >
        <div className="mt-1 flex flex-col md:flex-row justify-center md:space-x-12 rounded-full py-8 bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]">
          <div className="flex items-center md:border-r md:pr-8 p-4 md:p-0">
            <img src="./icons/lokasi.svg" alt="lokasi" />
            <div className="ml-4 text-md text-white-600">
              <p className="font-bold">Alamat</p>
              <p>Jl. Adi Sucipto No.38, Kerten, Laweyan</p>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0 md:border-r md:pr-8 hidden md:flex">
            <img src="./icons/telepon.svg" alt="telepon" className="ml-10" />
            <div className="ml-4 text-md text-white-600">
              <p className="font-bold">Telepon</p>
              <p>(0271)726036, (0271)740932</p>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0 hidden md:flex " id="tentang">
            <img src="./icons/mail.svg" alt="email" className="ml-10" />
            <div className="ml-4 text-md text-white-600">
              <p className="font-bold">Email</p>
              <p>admin@smkn6solo.sch.id</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContact;