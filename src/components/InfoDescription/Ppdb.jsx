import React from 'react'

const Ppdb = () => {
  return (
    <div>
      <div className="flex px-12 justify-center mt-10 ml-4 md:ml-4">
  <div
    className="px-4 max-w-screen-xl1 flex flex-col md:flex-row"
    data-aos="fade-right"
    data-aos-duration={1000}
    data-aos-delay={200}
    data-aos-offset={100}
  >
    <div className="flex flex-col md:flex-row items-center">
      <h1 className="text-2xl md:text-4xl text-white mb-4 md:mb-0 justify-center">
        <span className="text-2xl md:text-4xl font-bold">PPDB ONLINE</span>
        <br />
        <span className="text-1xl md:text-2xl">2023/2024</span>
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
      Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
      Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
      mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget
      sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna
      fringilla urna porttitor rhoncus vitae.
    </p>
    <div className="mt-4">
      <div className=" mt-4">
        <div
          className="px-4 py-2 rounded-md hover:from-purple-600 hover:to-purple-400 text-center"
          style={{
            backgroundImage: "linear-gradient(to right, #8176AF, #C0B7E8)",
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
  )
}

export default Ppdb
