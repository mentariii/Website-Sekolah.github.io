import React from 'react'

const CardPPDB = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-6">
  <div
    className="flex flex-col items-center py-4"
    data-aos="flip-up"
    data-aos-duration={1000}
    data-aos-delay={200}
    data-aos-offset={100}
  >
    <div
      className="w-40 h-40 rounded-full flex justify-center items-center text-center text-white relative"
      style={{
        backgroundImage: "linear-gradient(to right, #8176AF, #C0B7E8)",
        border: "17px solid #282438"
      }}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-[#343045]">01</h2>
    </div>
    <div className="flex items-center">
      <img
        src="./images/arrow-small-right.png"
        alt="Arrow Right"
        className="w-10 h-10"
      />
      <p className="text-md text-white">Pengajuan Akun</p>
    </div>
  </div>
  <div
    className="flex flex-col items-center py-4"
    data-aos="flip-down"
    data-aos-duration={1000}
    data-aos-delay={200}
    data-aos-offset={100}
  >
    <div
      className="w-40 h-40 rounded-full flex justify-center items-center text-center text-white relative"
      style={{
        backgroundImage: "linear-gradient(to right, #8176AF, #C0B7E8)",
        border: "17px solid #282438"
      }}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-[#343045]">02</h2>
    </div>
    <div className="flex items-center">
      <img
        src="./images/arrow-small-right.png"
        alt="Arrow Right"
        className="w-10 h-10"
      />
      <p className="text-md text-white">Pendaftaran</p>
    </div>
  </div>
  <div
    className="flex flex-col items-center py-4"
    data-aos="flip-up"
    data-aos-duration={1000}
    data-aos-delay={200}
    data-aos-offset={100}
  >
    <div
      className="w-40 h-40 rounded-full flex justify-center items-center text-center text-white relative"
      style={{
        backgroundImage: "linear-gradient(to right, #8176AF, #C0B7E8)",
        border: "17px solid #282438"
      }}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-[#343045]">03</h2>
    </div>
    <div className="flex items-center">
      <img
        src="./images/arrow-small-right.png"
        alt="Arrow Right"
        className="w-10 h-10"
      />
      <p className="text-md text-white">Pengumuman</p>
    </div>
  </div>
  <div
    className="flex flex-col items-center py-4"
    data-aos="flip-down"
    data-aos-duration={1000}
    data-aos-delay={200}
    data-aos-offset={100}
  >
    <div
      className="w-40 h-40 rounded-full flex justify-center items-center text-center text-white relative"
      style={{
        backgroundImage: "linear-gradient(to right, #8176AF, #C0B7E8)",
        border: "17px solid #282438"
      }}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-[#343045]">04</h2>
    </div>
    <div className="flex items-center">
      <img
        src="./images/arrow-small-right.png"    
        alt="Arrow Right"
        className="w-10 h-10"
      />
      <p className="text-md text-white">Daftar Ulang</p>
    </div>
  </div>
  {/* Add three more similar code blocks for the other elements */}
</div>

    </div>
  )
}

export default CardPPDB
