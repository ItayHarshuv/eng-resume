import React from "react";
import styled from "styled-components";
import { lightBg, primary, subtext } from "../palette";

const Dots = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Dot = styled.span<{ filled: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(p) => (p.filled ? primary : lightBg)};
  border: 1px solid ${subtext};
  border-color: ${primary};

`;

export function LanguageProficiency({ level, max = 5 }: { level: number; max?: number }) {
  const dots = Array.from({ length: max }, (_, i) => i < level);
  return (
    <Dots>
      {dots.map((filled, idx) => (
        <Dot key={idx} filled={filled} />
      ))}
    </Dots>
  );
}

export default LanguageProficiency;

const Row = styled.div`
  display: grid;
  grid-template-columns: 5rem auto;
  align-items: center;
  column-gap: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Name = styled.span`
  white-space: nowrap;
  font-size: 1.05rem;
`;

export function LanguageRow({ name, level, max = 5 }: { name: string; level: number; max?: number }) {
  return (
    <Row>
      <Name>{name}</Name>
      <LanguageProficiency level={level} max={max} />
    </Row>
  );
}


