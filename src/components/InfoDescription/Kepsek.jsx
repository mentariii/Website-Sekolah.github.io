import React from 'react'

const Kepsek = () => {
  return (
    <div>
      <section className="">
  <div className=" px-4 mx-auto max-w-screen-xl lg:py-2 flex flex-col md:flex-row">
    <div className="rounded-lg p-8 md:p-12 mb-4 md:w-1/2">
      <img
        src="./images/kepsek.png"
        alt="Gambar"
        className="w-full h-auto max-w-[350px]"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-delay={200}
        data-aos-offset={100}
      />
    </div>
    <div
      className="md:w-1/2 md:ml-auto mt-12"
      data-aos="fade-up"
      data-aos-duration={1000}
      data-aos-delay={200}
      data-aos-offset={100}
    >
      <h1 className="text-2xl md:text-4xl text-white mb-4 md:mb-0 justify-center">
        <span className="text-2xl md:text-4xl font-bold">Kepala Sekolah</span>
        <br />
        <span className="text-1xl md:text-2xl">
          Dwi Titik Indiyanti,S.Si,M.Pd.
        </span>
      </h1>
      <p className="text-gray-400  mt-4">
        Salam Literasi <br />
        Terima kasih Bapak/ Ibu / Saudara yang sudah berkenan singgah di website
        www.smkn6solo.sch.id <br />
        Website sekolah ini kami fungsikan sebagai media informasi tentang SMK N
        6 Surakarta dan sebagai sarana bagi kami belajar literasi. <br />
        Kami berusaha mengupdate setiap data dan berita sehingga apa yang dimuat
        di website sesuai dengan kondisi yang ada <br />
        SMK BISA <br />
        SMK HEBAT <br />
        SMK BISA HEBAT
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Kepsek
