import { Entry } from "../content";
import styled from "styled-components";
import { getTimeframeString } from "../utility/time";
import { subtext } from "../palette";

export function SectionItems({ children }: { children: Entry[] }) {
  return (
    <>
      {children.map((entry) => (
        <SectionItem {...entry} />
      ))}
    </>
  );
}

const Title = styled.h4`
  font-size: 1.2rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;
const Subtitle = styled.h5`
  font-weight: normal;
  font-size: 1.1rem;
  margin: 0;
`;
const Timeframe = styled.h6`
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0.3rem;
  margin-bottom: 0;
  color: ${subtext};
`;

function SectionItem(item: Entry) {
  const content = Array.isArray(item.content) ? (
    <ul>
      {item.content.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  ) : (
    item.content
  );

  return (
    <>
      <Title>{item.title}</Title>
      <Subtitle>{item.subtitle}</Subtitle>
      {
        item.timeframe && <Timeframe>{getTimeframeString(item.timeframe)}</Timeframe>
      }
      {content}
    </>
  );
}
