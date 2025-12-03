import React from "react";
import styled from "styled-components";
import { content } from "./content";
import Stack from "./components/Stack";
import {
  IconDefinition,
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Section } from "./components/Section";
import { designUnit } from "./utility/designUnit";
import { primary, lightBg } from "./palette";
import { Keywords } from './components/Keywords';

const Body = styled.div``;

const Panel = styled.div<{ color?: string; foreground?: string }>`
  background-color: ${(props) => props.color || "white"};
  color: ${(props) => props.foreground || "black"};
  padding: ${designUnit(3)} ${designUnit(11)};
`;

const Title = styled.h1`
  color: ${primary};
  font-weight: normal;
  font-size: 2.2rem;
  margin-top: 0.7rem;
  margin-bottom: 0.4rem;
`;
const Subtitle = styled.h2`
  font-weight: normal;
  margin-top: 0rem;
  margin-bottom: 0;
`;
const ContactInfoText = styled.span``;

function formatPhone(phone: number): string {
  const phoneStr = phone.toString();
  const areaCode = phoneStr.slice(0, 3);
  const prefix = phoneStr.slice(3, 5);
  const lineNumber = phoneStr.slice(5, 12);
  return `+${areaCode} ${prefix}-${lineNumber}`;
}

function ContactInfo(props: { icon: IconDefinition; children: string }) {
  return (
    <Stack gap={3} alignItems={"center"}>
      <FontAwesomeIcon icon={props.icon} />
      <ContactInfoText>{props.children}</ContactInfoText>
    </Stack>
  );
}

function App() {
  return (
    <Body>
      <Panel color={lightBg}>
        <Title>{content.name}</Title>
        <Subtitle>{content.title}</Subtitle>
        <Keywords>{content.keywords}</Keywords>
        {content.about}
      </Panel>
      <Panel color={primary} foreground={"white"}>
        <Stack justifyContent="space-between">
          <ContactInfo icon={faPhone}>
            {formatPhone(content.contact.phone)}
          </ContactInfo>
          <ContactInfo icon={faHouse}>{content.contact.address}</ContactInfo>
          <ContactInfo icon={faEnvelope}>{content.contact.email}</ContactInfo>
          <ContactInfo icon={faGithub}>{content.contact.github}</ContactInfo>
        </Stack>
      </Panel>
      <Panel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "5em",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {content.columns[0].map((section, index) => (
              <div
                key={index}
                style={
                  index === content.columns[0].length - 1
                    ? { marginTop: "auto" }
                    : undefined
                }
              >
                <Section {...section} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {content.columns[1].map((section, index) => (
              <div
                key={index}
                style={
                  index === content.columns[1].length - 1
                    ? { marginTop: "auto" }
                    : undefined
                }
              >
                <Section {...section} />
              </div>
            ))}
          </div>
        </div>
      </Panel>
    </Body>
  );
}

export default App;
