import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Jumbotron = () => {
  const TypingText = () => {
    const text = " Entrepreneur";
    const typingTextRef = useRef(null);
    const cursorRef = useRef(null);

    let index = 0;
    let typingSpeed =130; // Kecepatan ketik (ms)

    useEffect(() => {
      const typingText = typingTextRef.current;
      const cursor = cursorRef.current;

      const type = () => {
        if (index < text.length) {
          typingText.textContent += text.charAt(index);
          index++;
          setTimeout(type, typingSpeed);
        } else {
          cursor.style.display = "none";
        }
      };

      type();
    }, []);

    return (
      <>
        <span ref={typingTextRef}></span>
        <span className="cursor" ref={cursorRef}></span>
      </>
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="mt-12" id="home">
        <div
          className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 flex flex-col md:flex-row"
          data-aos="fade-in"
          data-aos-duration={1000}
          data-aos-delay={200}
          data-aos-offset={100}
        >
          <div className="rounded-lg p-8 md:p-12 mb-4 md:w-1/2">
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2 ">
              Be <span className="text-[#C0B7E8]">Smart</span> And{" "}
              <span className="text-[#C0B7E8]">Creative</span> To Become an 
              <TypingText  className="cursor text-[#C0B7E8]"/>
            </h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mt-4 mb-6 animate-fadeIn">
              5 S —-&gt;&gt; Senyum, Salam, Sapa , Sopan, Santun
            </p>
            <button
              href="#"
              className="py-2 rounded-[25px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-black p-4 mt-4 mr-2 flex items-center animate-fadeIn"
            >
              Selengkapnya
              <svg
                className="w-3.5 h-3.5 m-2"
                l=""
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
          <div
            className="md:w-1/2 md:ml-auto mt-12"
            data-aos="fade-in"
            data-aos-duration={1000}
            data-aos-delay={200}
            data-aos-offset={100}
          >
            <img
              src="./images/jumbotron .png"
              alt="Gambar"
              className="w-full h-auto max-w-[350px] animate-fadeIn "
              style={{ float: "right" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jumbotron;