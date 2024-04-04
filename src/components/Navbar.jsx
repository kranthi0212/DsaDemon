import React from "react";
import styled from 'styled-components';
import { Typography } from "@mui/material";
import CreatorCard from "./CreatorCard";
import { createData }  from "../components/CrearorData";

const NavContainer = styled.div`
  background-color: black;
  padding: 0.5rem 1rem;
  display: flex;
`;

const LogoTypo = styled(Typography)`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  margin-left: 1rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: lightgray;
  }
`;




const Navbar = () => {
  return (
    <div>
    <NavContainer>
      <LogoTypo>DSA Demon</LogoTypo>
    </NavContainer>
  
    {
      createData.map((data) => {
        return <CreatorCard  id={data.id} name={data.name} description={data.description} />
      })
    }
    </div>
  
  );
}

export default Navbar