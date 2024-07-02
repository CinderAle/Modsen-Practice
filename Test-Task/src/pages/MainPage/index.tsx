import GMap from "@/components/GMap";
import Sidebar from "@/components/Sidebar";
import Controls from "@/components/Controls";
import Section from "@/components/Section";
import MapControls from "@/components/MapControls";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { SectionType } from "@/types/section";
import { ReactNode } from "react";
import FilterSection from "@/components/FilterSection";
import BookmarkSection from "@/components/BookmarkSection";
import InfoSection from "@/components/InfoSection";
import RouteInfoSection from "@/components/RouteInfoSection";
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
