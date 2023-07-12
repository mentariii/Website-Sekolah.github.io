import React from 'react'

const Collab = () => {
  return (
    <div>
      <div
  className="container mx-auto p-4"
  data-aos="fade-up"
  data-aos-duration={1000}
  data-aos-delay={200}
  data-aos-offset={100}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img
          className="w-full max-w-xs"
          src="./images/Nusantech.png"
          alt="Nusantech"
        />
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img className="w-full max-w-xs" src="./images/GameLabb.png" alt="GameLabb" />
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img className="w-full max-w-xs" src="./images/Sinarmas.png" alt="Sinarmas" />
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img className="w-full max-w-xs" src="./images/Astra.png" alt="Astra" />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Collab
