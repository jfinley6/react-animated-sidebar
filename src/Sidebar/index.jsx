import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.5s ease;
  }

  &::before {
    top: ${(props) => (props.$clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.$clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.$clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.$clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(click => !click);

  return (
    <Container>
      <Button $clicked={click} onClick={() => handleClick()} />
    </Container>
  );
};

export default Sidebar;
