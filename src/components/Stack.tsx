import styled from "styled-components";
import { designUnit } from "../utility/designUnit";

interface StackProps {
  direction?: "row" | "column";
  alignItems?: "start" | "end" | "center" | "stretch" | "baseline";
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: number;
  flow?:
    | "column"
    | "column-reverse"
    | "nowrap"
    | "revert"
    | "row"
    | "row-revert"
    | "wrap";
}

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) =>
    props.alignItems
      ? props.alignItems
          .replace("start", "flex-start")
          .replace("end", "flex-end")
      : "flex-start"};
  justify-content: ${(props) =>
    props.justifyContent
      ? props.justifyContent
          .replace("start", "flex-start")
          .replace("end", "flex-end")
      : "flex-start"};
  gap: ${(props) => designUnit(props.gap || 0)};
  flex-flow: ${(props) => props.flow || "default"};
`;

export default Stack;
