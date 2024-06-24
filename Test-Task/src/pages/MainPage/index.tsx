import GMap from "@/components/GMap";
import Sidebar from "@/components/Sidebar";
import Controls from "@/components/Controls";
import Section from "@/components/Section";
import MapControls from "@/components/MapControls";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { SectionType } from "@/types/Section";
import { ReactNode } from "react";
import FilterSection from "@/components/FilterSection";
import BookmarkSection from "@/components/BookmarkSection";
import InfoSection from "@/components/InfoSection";

const sections = new Map<SectionType, ReactNode>([
  [SectionType.Filter, <FilterSection />],
  [SectionType.Bookmark, <BookmarkSection />],
]);

const MainPage = () => {
  const { type, info } = useTypedSelector((state) => state.section);
  return (
    <>
      <GMap />
      <Controls>
        <Sidebar />
        {type === SectionType.None || type === SectionType.Info || (
          <Section>{sections.get(type)}</Section>
        )}
        {type === SectionType.Info && (
          <Section>
            <InfoSection info={info} />
          </Section>
        )}
      </Controls>
      <MapControls />
    </>
  );
};

export default MainPage;
