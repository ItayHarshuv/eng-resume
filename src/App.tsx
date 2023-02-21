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

const Body = styled.div``;

const Panel = styled.div<{ color?: string; foreground?: string }>`
  background-color: ${(props) => props.color || "white"};
  color: ${(props) => props.foreground || "black"};
  padding: ${designUnit(4)} ${designUnit(8)};
`;

const Title = styled.h1`
  color: ${primary};
  font-weight: normal;
  font-size: 2.2rem;
  margin-top: 1rem;
  margin-bottom: 0.7rem;
`;
const Subtitle = styled.h2`
  font-weight: normal;
  margin-top: 0rem;
`;
const ContactInfoText = styled.span``;

function formatPhone(phone: number): string {
  const phoneStr = phone.toString();
  const areaCode = phoneStr.slice(0, 3);
  const prefix = phoneStr.slice(3, 6);
  const lineNumber = phoneStr.slice(6, 10);
  return `(${areaCode}) ${prefix}-${lineNumber}`;
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
        {content.sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </Panel>
    </Body>
  );
}

export default App;
