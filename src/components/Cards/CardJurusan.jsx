import React from 'react'
import Image from 'next/image'

const CardJurusan = () => {
  return (
    <div>
      <div className="flex justify-center p-4 mt-4 ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
    <div
      className="mx-auto shadow-xl rounded-xl overflow-hidden ml-8"
      style={{
        width: 250,
        height: 450,
        background: "#211E2E",
        backgroundImage:
          "radial-gradient(circle at center, rgba(67, 61, 96, 0.7) 0%, rgba(67, 61, 96, 0) 70%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
      }}
      data-aos="flip-left"
      data-aos-duration={1000}
      data-aos-delay={200}
      data-aos-offset={100}
    >
      {/* CardContent content  */}
      <div
        className="mx-auto shadow-xl rounded-xl overflow-hidden"
        style={{
          width: 250,
          height: 450,
          background: "#211E2E",
          backgroundImage:
            "radial-gradient(circle at center, rgba(67, 61, 96, 0.7) 0%, rgba(67, 61, 96, 0) 70%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20
        }}
      >
        <div className="relative">
          <div className="">
            <div className="flex justify-center items-center">
              <img
                            src="./images/RPLLogos.jpg"
                            alt="{rpl}"
                className="object-cover object-center rounded-full mt-2"
  
                style={{
                  border: "7px solid #0E0E0E",
                  borderRadius: "50%",
                  width: 150,
                  height: 150
                }}
              />
            </div>
          </div>
        </div>
        <div className="py-5 px-6 text-center text-white">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: 20 }}
          >
            RPL
          </h2>
          <hr className="w-40 mx-auto mb-4 border-b-1 border-purple-200 opacity-50" />
          <p className="mt-2 text-base text-[#c9c9c9]" style={{ fontSize: 13 }}>
            Program ini berkonsentrasi pada bidang informatika, yaitu software
            developer, baik itu web developer, mobile developer maupun game
            developer.
          </p>
          <div className="mt-4">
            <div className="flex justify-center items-center mt-4">
              <div
                className="px-4 py-2 rounded-md hover:from-purple-600 hover:to-purple-400 text-center mx-auto"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #8176AF, #C0B7E8)",
                  borderRadius: 20,
                  width: 150,
                  height: 40,
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <button
                  style={{
                    color: "#343045",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 12,
                    margin: "0 auto",
                    cursor: "pointer"
                  }}
                >
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="mx-auto shadow-xl rounded-xl overflow-hidden ml-8"
      style={{
        width: 250,
        height: 450,
        background: "#211E2E",
        backgroundImage:
          "radial-gradient(circle at center, rgba(67, 61, 96, 0.7) 0%, rgba(67, 61, 96, 0) 70%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
      }}
      data-aos="flip-right"
      data-aos-duration={1000}
      data-aos-delay={200}
      data-aos-offset={100}
    >
      {/* CardContent content*/}
      <div
        className="mx-auto shadow-xl rounded-xl overflow-hidden"
        style={{
          width: 250,
          height: 450,
          background: "#211E2E",
          backgroundImage:
            "radial-gradient(circle at center, rgba(67, 61, 96, 0.7) 0%, rgba(67, 61, 96, 0) 70%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20
        }}
      >
        <div className="relative">
          <div className="">
            <div className="flex justify-center items-center">
              <img
                className="object-cover object-center rounded-full mt-2"
                src="./images/DKVLogos.jpg"
                alt="{dkv}"
                style={{
                  border: "7px solid #0E0E0E",
                  borderRadius: "50%",
                  width: 150,
                  height: 150
                }}
              />
            </div>
          </div>
        </div>
        <div className="py-5 px-6 text-center text-white">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: 20 }}
          >
            DKV
          </h2>
          <hr className="w-40 mx-auto mb-4 border-b-1 border-purple-200 opacity-50" />
          <p className="mt-2 text-base text-[#c9c9c9]" style={{ fontSize: 13 }}>
            DKV adalah cabang ilmu desain yang mempelajari konsep komunikasi dan
            ungkapan kreatif, untuk menyampaikan pesan untuk tujuan tertentu.
          </p>
          <div className="mt-4">
            <div className="flex justify-center items-center mt-4">
              <div
                className="px-4 py-2 rounded-md hover:from-purple-600 hover:to-purple-400 text-center mx-auto"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #8176AF, #C0B7E8)",
                  borderRadius: 20,
                  width: 150,
                  height: 40,
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <button
                  style={{
                    color: "#343045",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 12,
                    margin: "0 auto",
                    cursor: "pointer"
                  }}
                >
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="mx-auto shadow-xl rounded-xl overflow-hidden ml-8"
      style={{
        width: 250,
        height: 450,
        background: "#211E2E",
        backgroundImage:
          "radial-gradient(circle at center, rgba(67, 61, 96, 0.7) 0%, rgba(67, 61, 96, 0) 70%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
      }}
      data-aos="flip-left"
      data-aos-duration={1000}
      data-aos-delay={200}
      data-aos-offset={100}
    >
      {/* CardContent content */}
      <div
        className="mx-auto shadow-xl rounded-xl overflow-hidden"
        style={{
          width: 250,
          height: 450,
          background: "#211E2E",
          backgroundImage:
            "radial-gradient(circle at center, rgba(67, 61, 96, 0.7) 0%, rgba(67, 61, 96, 0) 70%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20
        }}
      >
        <div className="relative">
          <div className="">
            <div className="flex justify-center items-center">
              <img
                className="object-cover object-center rounded-full mt-2"
                src="./images/RPLLogos.jpg"
                alt="{rpl}"
                style={{
                  border: "7px solid #0E0E0E",
                  borderRadius: "50%",
                  width: 150,
                  height: 150
                }}
              />
            </div>
          </div>
        </div>
        <div className="py-5 px-6 text-center text-white">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: 20 }}
          >
            RPL
          </h2>
          <hr className="w-40 mx-auto mb-4 border-b-1 border-purple-200 opacity-50" />
          <p className="mt-2 text-base text-[#c9c9c9]" style={{ fontSize: 13 }}>
            Program ini berkonsentrasi pada bidang informatika, yaitu software
            developer, baik itu web developer, mobile developer maupun game
            developer.
          </p>
          <div className="mt-4">
            <div className="flex justify-center items-center mt-4">
              <div
                className="px-4 py-2 rounded-md hover:from-purple-600 hover:to-purple-400 text-center mx-auto"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #8176AF, #C0B7E8)",
                  borderRadius: 20,
                  width: 150,
                  height: 40,
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <button
                  style={{
                    color: "#343045",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 12,
                    margin: "0 auto",
                    cursor: "pointer"
                  }}
                >
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="mx-auto shadow-xl rounded-xl overflow-hidden ml-8"
      style={{
        width: 250,
        height: 450,
        background: "#211E2E",
        backgroundImage:
          "radial-gradient(circle at center, rgba(67, 61, 96, 0.7) 0%, rgba(67, 61, 96, 0) 70%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
      }}
      data-aos="flip-right"
      data-aos-duration={1000}
      data-aos-delay={200}
      data-aos-offset={100}
    >
      {/* CardContent content */}
      <div
        className="mx-auto shadow-xl rounded-xl overflow-hidden"
        style={{
          width: 250,
          height: 450,
          background: "#211E2E",
          backgroundImage:
            "radial-gradient(circle at center, rgba(67, 61, 96, 0.7) 0%, rgba(67, 61, 96, 0) 70%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20
        }}
      >
        <div className="relative">
          <div className="">
            <div className="flex justify-center items-center">
              <img
                className="object-cover object-center rounded-full mt-2"
                src="./images/DKVLogos.jpg"
                alt="{dkv}"
                style={{
                  border: "7px solid #0E0E0E",
                  borderRadius: "50%",
                  width: 150,
                  height: 150
                }}
              />
            </div>
          </div>
        </div>
        <div className="py-5 px-6 text-center text-white">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: 20 }}
          >
            DKV
          </h2>
          <hr className="w-40 mx-auto mb-4 border-b-1 border-purple-200 opacity-50" />
          <p className="mt-2 text-base text-[#c9c9c9]" style={{ fontSize: 13 }}>
            DKV adalah cabang ilmu desain yang mempelajari konsep komunikasi dan
            ungkapan kreatif, untuk menyampaikan pesan untuk tujuan tertentu.
          </p>
          <div className="mt-4">
            <div className="flex justify-center items-center mt-4">
              <div
                className="px-4 py-2 rounded-md hover:from-purple-600 hover:to-purple-400 text-center mx-auto"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #8176AF, #C0B7E8)",
                  borderRadius: 20,
                  width: 150,
                  height: 40,
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <button
                  style={{
                    color: "#343045",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 12,
                    margin: "0 auto",
                    cursor: "pointer"
                  }}
                >
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default CardJurusan
