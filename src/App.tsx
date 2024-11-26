import { HeroSection } from "./sections/HeroSection/HeroSection.tsx";
import { Header } from "./components/Header/Header.tsx";
import { menus, sectionsData } from "./data";
import { InView } from "react-intersection-observer";
import { SectionWrapper } from "./sections/SectionWrapper/SectionWrapper.tsx";
import { useState } from "react";

function App() {
  const [visibleSection, setVisibleSection] = useState(menus[0].code);
  const setInView = (inView, entry) => {
    if (inView) {
      const sectionId = entry.target.getAttribute("id");
      setVisibleSection(sectionId);
    }
  };
  return (
    <>
      <Header visibleSection={visibleSection} />
      <HeroSection />
      {sectionsData.map((item) => (
        <InView key={item.id} as="div" onChange={setInView} threshold={0.1}>
          {({ ref }) => <SectionWrapper inViewRef={ref} section={item} />}
        </InView>
      ))}
    </>
  );
}

export default App;
