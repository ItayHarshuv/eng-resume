import { Section as SectionType } from "../content";
import styled from "styled-components";
import { Badges } from "./Badges";
import { SectionItems } from "./SectionItems";
import { primary } from "../palette";
import { Keywords } from './Keywords';

const SectionTitle = styled.h3`
  text-transform: uppercase;
  color: ${primary};
  font-weight: 500;
  font-size: 1.5rem;
    margin-top: 1.2rem;
    margin-bottom: 0.8rem;
`;

export function Section(section: SectionType) {
  return (
    <>
      <SectionTitle>{section.title}</SectionTitle>
      <Keywords>{section.keywords ?? []}</Keywords>
      {getSectionContent(section.content)}
    </>
  );
}

function getSectionContent(content: SectionType["content"]) {
  if (isBadges(content)) {
    return <Badges>{content}</Badges>;
  }

  return <SectionItems>{content}</SectionItems>;
}

function isBadges(content: SectionType["content"]): content is string[] {
  return typeof content[0] === "string";
}
