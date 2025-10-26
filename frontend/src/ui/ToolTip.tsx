import { useState } from "react";
import styled from "styled-components";

interface TooltipProps {
  id: string;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

const TooltipContainer = styled.span`
  position: relative;
  display: inline-block;
  cursor: help;
`;

const Icon = styled.span`
  margin-left: 4px;
  color: #007bff;
  font-weight: bold;
`;

const TooltipBubble = styled.div<{ position: string }>`
  position: absolute;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 8px;
  white-space: nowrap;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  ${({ position }) =>
    position === "top"
      ? "bottom: 120%; left: 50%; transform: translateX(-50%);"
      : position === "bottom"
      ? "top: 120%; left: 50%; transform: translateX(-50%);"
      : position === "left"
      ? "right: 120%; top: 50%; transform: translateY(-50%);"
      : "left: 120%; top: 50%; transform: translateY(-50%);"}
`;

export const Tooltip = ({ id, text, position = "top" }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <TooltipContainer
      data-guidance-id={id}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Icon>ⓘ</Icon>
      {visible && <TooltipBubble position={position}>{text}</TooltipBubble>}
    </TooltipContainer>
  );
};
