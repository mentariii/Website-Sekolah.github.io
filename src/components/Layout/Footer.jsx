import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="text-white mx-auto items-center justify-center mt-10">
  <div className="flex flex-col md:flex-row justify-evenly">
    <div className="flex flex-col mb-5 md:mb-0 md:px-10 md:py-9">
      <h1 className="text-center m-2 font-bold">Alamat</h1>
      {/* batas */}
      <div
        className="items-center mx-auto"
        style={{ width: 250, height: 150, borderRadius: 2, overflow: "hidden" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.195999093989!2d110.79631177455036!3d-7.553595374582831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14248f7a300b%3A0x8147b47e94da5fa2!2sSMK%20Negeri%206%20Surakarta!5e0!3m2!1sid!2sid!4v1689064541957!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    {/* batas */}
    <div className="w-[1px] h-8 bg-gradient-to-b from-slate-800 via-slate-100 to-white-100 md:w-2 md:h-auto hidden md:block" />
    <div className="mb-5 flex flex-col py-9 text-center">
      <a href="" className="m-2 font-bold">
        LINK TERKAIT
      </a>
      <a href="" className="m-2 font-bold">
        e-raport
      </a>
      <a href="" className="m-2 font-bold">
        e-learning
      </a>
      <a href="" className="m-2 font-bold">
        e-library
      </a>
    </div>
    {/* batas       */}
    <div className="w-[1px] h-10 bg-gradient-to-b from-slate-800 via-slate-100 to-white-100 md:w-2 md:h-auto hidden md:block" />
    <div className="mb-5 md:pl-10 md:py-9 text-center">
      <h1 className="m-2 text-left font-bold mb-5 md:mb-0 text-center">
        SOCIAL MEDIA
      </h1>
      <div className="flex flex-wrap justify-center mt-4">
        <img src="./images/facebook.png" alt="" className="m-1" />
        <img src="./images/twitter.png" alt="" className="m-1" />
        <img src="./images/email.png" alt="" className="m-1" />
        <img src="./images/youtube.png" alt="" className="m-1" />
        <img src="./images/instagram.png" alt="" className="m-1" />
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="#"
          className="py-2 rounded-[25px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-black px-8 flex items-center"
        >
          CONTACT
        </a>
      </div>
    </div>
  </div>
  <div className="flex justify-center flex-col mt-10 md:mt-20">
    <div className="w-4/5 h-1 bg-gradient-to-r from-slate-800 via-slate-100 to-white-100 mx-auto" />
    <p className="text-white text-center py-9">
      Copyright © 2023 <br />
      Mentari Dwi Prastiwi
    </p>
  </div>
</div>

    </div>
  )
}

export default Footer
