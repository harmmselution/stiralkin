import React, { FC } from "react";

interface SectionWrapperProps {
  section: { sectionJSX: () => JSX.Element; id: string };
  inViewRef: React.RefObject<any> | ((node?: Element | null) => void);
}

export const SectionWrapper: FC<SectionWrapperProps> = ({
  section,
  inViewRef,
}) => {
  return (
    <section ref={inViewRef} id={section.id}>
      {section.sectionJSX()}
    </section>
  );
};
