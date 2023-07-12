import React from 'react'

const Tentang = () => {
  return (
    <div>
      <div className="flex px-10 py-5 px-12 justify-center mt-4">
  <div
    className="px-4 max-w-screen-xl lg:py-1 flex flex-col md:flex-row "
    data-aos="fade-right"
    data-aos-duration={1000}
    data-aos-delay={200}
    data-aos-offset={100}
  >
    <div className="flex flex-col md:flex-row items-center">
      <h1 className="text-2xl md:text-4xl text-white mb-4 md:mb-0 justify-center ">
        <span className="text-2xl md:text-4xl font-bold">Sejarah Singkat</span>
        <br />
        <span className="text-1xl md:text-2xl">SMKN 6 Surakarta</span>
      </h1>
      <img
        src="./images/arrowRigthLong.png"
        alt=""
        className="mt-4 md:mt-0 mx-4 md:mx-10"
      />
    </div>
  </div>
  <div
    className="w-full md:w-1/2"
    data-aos="fade-left"
    data-aos-duration={1000}
    data-aos-delay={200}
    data-aos-offset={100}
  >
    <p className="text-gray-400">
      Bertempat di Gilingan – Banjarsari belakang SD Cemara Dua SMEP Berdiri.
      SMEP (Sekolah Menengah Ekonomi Pertama) setingkat SMP berbasis Ekonomi.
      Kepala Sekolah saat itu Bapak Marwan didukung beberapa guru pengajar
      beliau memimpin di dua lokasi sekaligus karena keterbatasan lokasi dan
      ruang yakni kelas 1 di Cemara Dua dan kelas 2 dan 3 di HOHAP Warung Pelem
      – Solo. Beliau memimpin sejak 1967 hingga 1971.
    </p>
  </div>
</div>

    </div>
  )
}

export default Tentang
