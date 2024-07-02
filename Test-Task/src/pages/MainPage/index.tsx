import { ReactNode } from "react";

import BookmarkSection from "@/components/BookmarkSection";
import Controls from "@/components/Controls";
import FilterSection from "@/components/FilterSection";
import GMap from "@/components/GMap";
import InfoSection from "@/components/InfoSection";
import MapControls from "@/components/MapControls";
import RouteInfoSection from "@/components/RouteInfoSection";
import Section from "@/components/Section";
import Sidebar from "@/components/Sidebar";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { SectionType } from "@/types/section";
import { Sight } from "@/types/sight";

const sections = new Map<SectionType, ReactNode>([
    [SectionType.Filter, <FilterSection />],
    [SectionType.Bookmark, <BookmarkSection />],
]);

const MainPage = () => {
    const { type, info } = useTypedSelector((state) => state.section);
    console.log(type, info);

    return (
        <>
            <GMap />
            <Controls>
                <Sidebar />
                {type === SectionType.None ||
                    type === SectionType.Info ||
                    type === SectionType.Route || (
                        <Section>{sections.get(type)}</Section>
                    )}
                {type === SectionType.Info && info instanceof Sight && (
                    <Section>
                        <InfoSection info={info} />
                    </Section>
                )}
                {type === SectionType.Route && "distance" in info && (
                    <RouteInfoSection
                        distance={info.distance}
                        time={info.time}
                    />
                )}
            </Controls>
            <MapControls />
        </>
    );
};

export default MainPage;
