import React from "react";
import CountUp from "react-countup";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import lovebabbarbanner from "../assets/lovebabbarbanner.jpg";
import lovebabbar from "../assets/lovebabbarpp.jpg";
import amandhattarwal from "../assets/amandhattarwalpp.jpg";
import amandhattarwalbanner from "../assets/amandhattarwalbanner.jpg";
import anujbhaiyabanner from "../assets/anujbhaiyabanner.jpg";
import anujbhaiya from "../assets/anujbhaiyapp.jpg";
import striver from "../assets/striverpp.jpg";
import striverbanner from "../assets/striverbanner.jpg";
import fraz from "../assets/mohammadfrazpp.jpg";
import frazbanner from "../assets/mohammadfrazbanner.jpg";
import { createData }  from "../components/CrearorData";
import { useLocation } from 'react-router-dom';

// Styled components
const Container = styled.div`
  margin: 2rem 8rem;
  @media only screen and (max-width: 768px) {
    margin: 1rem;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 250px;
`;

const AboutContainer = styled.div`
  display: flex;
  background-color: #1d2226;
  border-radius: 20px;
  padding: 1rem;
  margin: 2rem 0;
  width: 64%;
  @media only screen and (max-width: 768px) {
    margin: 2rem 3rem;
    display: block;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .logo img {
    width: 180px;
    border-radius: 10%;
    margin-right: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .logo img {
      width: 60%;
      height: 60%;
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-bottom: 1rem;
    }
  }
`;

const CreatorName = styled.h1`
  color: white;
  font-family: calibri;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const CreatorDescription = styled.p`
  color: white;
  font-family: calibri;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d2226;
  border-radius: 20px;
  padding: 1rem;
  margin: 2rem 0;
  width: 30%;
  @media only screen and (max-width: 768px) {
    margin: 2rem 2.5rem;
    display: block;
    width: 70%;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const IframeContainer = styled.div`
  width: 560px;
  height: 315px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const LinksContainer = styled.div`
  margin-left: 1rem;
  @media only screen and (max-width: 768px) {
    margin : 1rem 2rem;
  }
`;

const SocialNumber = styled.h2`
  color: white;
  font-family: calibri;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const CreatorAbout = () => {
  const location = useLocation();;
  const id = location.pathname.split("/")[2];

  const data = createData.find((item) => item.id === id);
  const socials = ['Youtube', 'Linkedin', 'Instagram', 'Twitter'];
  return (
    <Container>
    <h3
    style={{ color: 'white', fontFamily: 'calibri', marginBottom: '1rem' }}
    >
    <a
      href="/"
    >
      Back
    </a>
    </h3>
      <BannerImage src={
        id == "lovebabbar" ? lovebabbarbanner : id == "amandhattarwal" ? amandhattarwalbanner : id == "anujbhaiya" ? anujbhaiyabanner : id == "striver" ? striverbanner : frazbanner
      } alt="Creator About" />
      <Body>
        <AboutContainer>
          <LogoContainer>
            <div className="logo">
              <img src={
                id == "lovebabbar" ? lovebabbar : id == "amandhattarwal" ? amandhattarwal : id == "anujbhaiya" ? anujbhaiya : id == "striver" ? striver : fraz
              } alt="Images" />
            </div>
          </LogoContainer>
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CreatorName>{data.name}</CreatorName>
              <CreatorDescription>
                {data.description}
              </CreatorDescription>
            </div>
          </div>
        </AboutContainer>
        <NumberContainer>
          <CreatorName>Students Educated</CreatorName>
          {
            data.numbers.map(( index, number) => {
              return(
                <SocialNumber>
                {socials[number]} : {" "}
                <CountUp start={0} end={index} duration={2.75} suffix="+" />
              </SocialNumber>
              )
              
            })
          }
        </NumberContainer>
      </Body>

      <div
        style={{
          width: "auto",
          backgroundColor: "#1d2226",
          padding: "1rem 0",
        }}
      >
        <CreatorName
          style={{
            textAlign: "center",
          }}
        >
          The {data.name} DSA Sheet
        </CreatorName>
        <DetailsContainer
          
        >
          <IframeContainer>
            <iframe
              width="100%"
              height="100%"
              src={data.iframe}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </IframeContainer>
          <LinksContainer

          >
            <CreatorName>
              Sheet Link : &nbsp;
              <a
                href={data.dsasheeturl}
                target="_blank"
              >
                DSA Sheet
              </a>
            </CreatorName>

            <CreatorName>
              Learn from {data.name} (free): &nbsp;
              <a
                href={data.dsafree}
                target="_blank"
              >
                DSA free course
              </a>
            </CreatorName>
            <CreatorName>
              Learn from {data.brandname} (paid): &nbsp;
              <a
                href={data.dsapaid}
                target="_blank"
              >
                DSA paid course
              </a>
            </CreatorName>

            <CreatorName>
              Total Students Accessed : &nbsp;{" "}
              <CountUp start={0} end={100000} duration={2.75} suffix="+" />
            </CreatorName>
            <CreatorName>
              Creators Social Links : &nbsp;
            </CreatorName>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <SocialIcon network="youtube" href={data.youtubelink}/>
            <SocialIcon network="instagram" href={data.instalink}/>
            <SocialIcon network="twitter" href={data.twitterlink}/>
            <SocialIcon network="linkedin" href={data.linkedinlink} />
            </div>
          </LinksContainer>
        </DetailsContainer>
      </div>
    </Container>
  );
};

export default CreatorAbout;
