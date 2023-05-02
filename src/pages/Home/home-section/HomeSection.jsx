import React from "react";
import Section, { SectionContent } from "../../../components/Section/Section";

const HomeSection = (props) => {
  return (
    <Section className={props.className}>
      <SectionContent className={props.contentClassName} style={props.bgImg}>
        {props.children}
      </SectionContent>
    </Section>
  );
};

export default HomeSection;
