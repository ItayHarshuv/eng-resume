import styled from "styled-components";
import Stack from "./Stack";
import { primary } from "../palette";

const Badge = styled.span`
  background-color: ${primary};
  color: white;
  padding: 1px 0.6rem;
  border-radius: 4px;
`;

export function Badges({ children }: { children: string[] }) {
  return (
    <Stack gap={1} flow={"wrap"}>
      {children.map((badge) => (
        <Badge>{badge}</Badge>
      ))}
    </Stack>
  );
}
