import React from 'react'

const News = () => {
  return (
    <div>
      <>
  <h1
    className="text-center text-white font-extrabold text-3xl w-60 py-7 mx-auto mt-4"
    id="news"
    data-aos="fade-in"
    data-aos-duration={1000}
    data-aos-delay={200}
    data-aos-offset={100}
  >
    News
  </h1>
  <div
    className="w-4/5 h-1 bg-gradient-to-r from-slate-800 via-slate-100 to-white-100 mx-auto"
    data-aos="fade-in"
    data-aos-duration={1000}
    data-aos-delay={200}
    data-aos-offset={100}
  />
  <div
    className="grid grid-cols-3 gap-4 mx-auto px-8 py-4 mt-8"
    data-aos="fade-up"
    data-aos-duration={1000}
    data-aos-delay={200}
    data-aos-offset={100}
  >
    {/* Baris Pertama */}
    <div className="w-350">
      <img
        src="./images/News1.png"
        alt=""
        data-aos="flip-right"
        data-aos-duration={1000}
        data-aos-delay={200}
        data-aos-offset={100}
      />
      <p className="font-bold text-[#2890A7] my-2">
        Penyelarasan kurikulum dan penandatanganan MOU dengan Industri
      </p>
      <p className="text-[#c6c6c6]">
        Dalam rangka meningkatkan link and match antara sekolah dengan dunia
        industri, SMK Negeri 6 Surakarta, pada hari Selasa 21 Maret 2023
        mengadakan Sinkronisasi dan Penyelarasan Kurikulum dengan PT. Itho
        Indostock dari Jakarta.
      </p>
    </div>
    <div className="w-350">
      {/* Konten Card Kedua */}
      <img
        src="./images/News2.png"
        alt=""
        data-aos="flip-left"
        data-aos-duration={1000}
        data-aos-delay={200}
        data-aos-offset={100}
      />
      <p className="font-bold text-[#2890A7] my-2">
        KUNJUNGAN DARI SMK BUDI UTOMO 1, 2 WAY JEPARA, LAMTIM
      </p>
      <p className="text-[#c6c6c6]">
        Rabu, 24 Mei 2023 SMKN 6 Surakarta mendapat kunjungan dari Kota yang
        memiliki semboyan Bumei Tuweh Bepadan, yaitu Lampung Timur tepatnya dari
        SMK Budi Utomo 1 dan SMK Budi Utomo 2 Way Jepara.
      </p>
    </div>
    <div className="w-350">
      {/* Konten Card Ketiga */}
      <img
        src="./images/News3.png"
        alt=""
        data-aos="flip-right"
        data-aos-duration={1000}
        data-aos-delay={200}
        data-aos-offset={100}
      />
      <p className="font-bold text-[#2890A7] my-2">
        Siswa SMKN 6 Surakarta sabet Juara 1 dalam PIMPEL BEM FKIP UMS tahun
        2023
      </p>
      <p className="text-[#c6c6c6]">
        PIMPEL singkatan dari Pekan Ilmiah Mahasiswa dan Pelajar yang merupakan
        ajang kompetisi bagi mahasiswa dan pelajar dari seluruh Indonesia. Pada
        kompetisi ini BEM FKIP UMS mengajak siswa siswi dari seluruh Jawa Tengah
        dan DIY untuk berkompetisi dalam menampilkan karya P5.
      </p>
    </div>
    {/* Baris Kedua */}
    <div className="w-350 mt-4">
      {/* Konten Card Keempat */}
      <img
        src="./images/News4.png"
        alt=""
        data-aos="flip-left"
        data-aos-duration={1000}
        data-aos-delay={200}
        data-aos-offset={100}
      />
      <p className="font-bold text-[#2890A7] my-2">
        PEMENANG LKS SIAP MEWAKILI KOTA SURAKARTA
      </p>
      <p className="text-[#c6c6c6]">
        Senin 21 Maret 2023, hari yang cukup cerah namun terasa sejuk dirasakan
        di halaman SMKN 6 Surakarta. Sebanyak 10 siswa dari 6 kompetensi
        keahlian menyerahkan piala kejuaraan Lomba Kompetensi Siswa (LKS)
        Tingkat Kota Tahun 2023 kepada Kepala SMK Negeri 6 Surakarta, Ibu Dwi
        Titik Irdiyanti, S.Si, M.Pd.
      </p>
    </div>
    <div className="w-350 mt-4">
      {/* Konten Card Kelima */}
      <img
        src="./images/News5 .png"
        alt=""
        data-aos="flip-left"
        data-aos-duration={1000}
        data-aos-delay={200}
        data-aos-offset={100}
      />
      <p className="font-bold text-[#2890A7] my-2">
        JEJAK SANG PENGAWAL MERAH PUTIH (REFLEKSI 55 TAHUN SMKN 6 SURAKARTA)
      </p>
      <p className="text-[#c6c6c6]">
        PASKIBRA, tentu bukan istilah yang terlalu asing bagi kita. Dari tingkat
        bawah hingga tingkat atas, terutama pada momentum peringatan kemerdekaan
        Indonesia, kita akan disodori segala aktivitas sang pengawal bendera
        merah putih dengan seragam tak terlalu asing, yaitu atasan dan bawahan
        putih.
      </p>
    </div>
    <div className="w-350 mt-4 ">
      {/* Konten Card Keenam */}
      <img
        src="./images/News6.png"
        alt=""
        data-aos="flip-left"
        data-aos-duration={1000}
        data-aos-delay={200}
        data-aos-offset={100}
      />
      <p className="font-bold text-[#2890A7] my-2">
        Diklat Paspramsus Ambalan Sambernyawa Dewi Sartika Gugus Depan
        01.129/01.130 SMK Negeri 6 Surakarta
      </p>
      <p className="text-[#c6c6c6]">
        Kegiatan ini diikuti oleh anggota dan calon anggota dari Paspramsus
        Kopramsega kelas 10 dan 11. Tampak kekompakan yang disajikan dengan
        jargon / yel- yel kopramsega jaya.
      </p>
    </div>
  </div>
</>

    </div>
  )
}

export default News
