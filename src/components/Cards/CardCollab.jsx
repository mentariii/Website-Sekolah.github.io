import React from 'react'

const CardCollab = () => {
  return (
    <div>
      <div
  id="kelasindusri"
  className="relative h-60 mx-4 md:mx-40 rounded-3xl my-8 overflow-hidden px-4 py-2 text-center mx-auto md:w-4/5"
  style={{
    background: "linear-gradient(to right, #8176AF, #C0B7E8)",
    borderRadius: 100,
    display: "flex",
    alignItems: "center"
  }}
  data-aos="fade-down"
  data-aos-duration={1000}
  data-aos-delay={200}
  data-aos-offset={100}
>
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: 'url("./images/bgheader-collab.jpg")' }}
  />
  <div className="absolute inset-0 bg-black opacity-70 flex flex-col justify-center items-center text-white font-bold text-xl p-6">
    <h2
      className="text-2xl mb-2"
      style={{
        fontWeight: "bold",
        fontFamily: "Montserrat, sans-serif",
        fontSize: 36
      }}
    >
      SMK Negeri 6 Surakarta
    </h2>
    <p
      className="text-gray-200 my-2"
      style={{ fontFamily: "Montserrat, sans-serif", fontSize: 25 }}
    >
      Bekerja sama dengan
    </p>
  </div>
</div>

    </div>
  )
}

export default CardCollab
