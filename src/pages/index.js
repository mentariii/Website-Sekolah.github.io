import React from "react";
import Navbar from "/src/components/Layout/Navbar";
import Footer from "/src/components/Layout/Footer";
import Jumbotron from "/src/components/Jumbotron/Jumbotron";
import InfoContact from "/src/components/InfoContact/InfoContact";
import Tentang from "/src/components/InfoDescription/Tentang";
import Kepsek from "/src/components/InfoDescription/Kepsek";
import Jurusan from "/src/components/InfoDescription/Jurusan";
import Ppdb from "/src/components/InfoDescription/Ppdb";
import Cardjurusan from "/src/components/Cards/CardJurusan";
import CardPPDB from "/src/components/Cards/CardPPDB";
import CardCollab from "/src/components/Cards/CardCollab";
import ImgCollab from "/src/components/Grid/Collab";
import News from "/src/components/Grid/News";



const Home = () => {
  return (
    <>
      <Navbar/>
      <Jumbotron id="home"/>
      <InfoContact/>
      <Tentang id="tentang"/>
      <Kepsek/>
      <Jurusan id="proah"/>
      <Cardjurusan/>
      <Ppdb id="PPDB"/>
      <CardPPDB/>
      <CardCollab id="kelasindustri"/>
      <ImgCollab/>
      <News id="news"/>
      <Footer/>
    </>
  );
};

export default Home;