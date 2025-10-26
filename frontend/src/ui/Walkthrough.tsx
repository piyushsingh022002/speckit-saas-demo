import { useState } from "react";
import styled from "styled-components";

interface Step {
  id: string;
  title: string;
  description: string;
}

interface WalkthroughProps {
  id: string;
  steps: Step[];
}

const WalkthroughBox = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 300px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 16px;
  z-index: 9999;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Desc = styled.p`
  font-size: 14px;
  color: #444;
  margin-bottom: 12px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const Walkthrough = ({ id, steps }: WalkthroughProps) => {
  const [current, setCurrent] = useState(0);
  const step = steps[current];

  return (
    <WalkthroughBox data-walkthrough-id={id}>
      <Title>{step.title}</Title>
      <Desc>{step.description}</Desc>
      <Nav>
        <Btn disabled={current === 0} onClick={() => setCurrent(c => c - 1)}>Back</Btn>
        <Btn disabled={current === steps.length - 1} onClick={() => setCurrent(c => c + 1)}>
          {current === steps.length - 1 ? "Done" : "Next"}
        </Btn>
      </Nav>
    </WalkthroughBox>
  );
};
