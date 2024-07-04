import { useAction } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Sight } from "@/types/sight";
import { SightTypes } from "@/types/sightTypes";
import { addBookmark } from "@/utils/addBookmark";
import getAllSightTypesFromAllTypes from "@/utils/getAllSightTypesFromAllTypes";
import { getBookmarks } from "@/utils/getBookmarks";
import { removeBookmark } from "@/utils/removeBookmark";

import {
    BookmarkAddButton,
    BookmarkIcon,
    BookmarkRemoveButton,
    RouteButton,
    RouteIcon,
    ShowBookmarksButton,
    ShowBookmarksIcon,
} from "./styles/buttons";
import { SightImage, TypeIcon } from "./styles/images";
import { ButtonsContainer, InfoContainer } from "./styles/section";
import { SightDescription, SightName } from "./styles/text";

interface Props {
    info: Sight;
}

const InfoSection = ({ info }: Props) => {
    const icons =
        info.types !== undefined
            ? getAllSightTypesFromAllTypes(info.types).map((type) =>
                  SightTypes[type].toLowerCase(),
              )
            : [];

    const { setRouteEnd, setUserBookmarks, showBookmark } = useAction();
    const userLogin = useTypedSelector((state) => state.user.user.login);
    const bookmarks = useTypedSelector((state) => state.user.user.bookmarks);

    const isInBookmarks = (place: Sight): boolean => {
        return (
            bookmarks.filter((bookmark) => bookmark.id === place.id).length > 0
        );
    };

    const setCoordinatesForRoute = () => {
        setRouteEnd(info.coordinates);
    };

    const updateUserBookmarks = () => {
        getBookmarks(userLogin).then((newBookmarks) => {
            setUserBookmarks(newBookmarks);
        });
    };

    const removeFromBookmarks = () => {
        removeBookmark(userLogin, info);
        updateUserBookmarks();
    };

    const saveToBookmarks = () => {
        addBookmark(userLogin, info);
        updateUserBookmarks();
    };

    return (
        <div>
            <ShowBookmarksButton onClick={showBookmark}>
                <ShowBookmarksIcon />
                Избранное
            </ShowBookmarksButton>
            <InfoContainer>
                <SightImage src={info.photo} />
                {icons.map((icon) => (
                    <TypeIcon src={`/places/${icon}.svg`} />
                ))}
                <SightName>{info.title}</SightName>
                <SightDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit iusto, reprehenderit commodi libero nostrum
                    voluptatum quas voluptatibus possimus qui odit.
                </SightDescription>
                <ButtonsContainer>
                    {isInBookmarks(info) ? (
                        <BookmarkRemoveButton onClick={removeFromBookmarks}>
                            <BookmarkIcon />
                            Сохранено
                        </BookmarkRemoveButton>
                    ) : (
                        <BookmarkAddButton onClick={saveToBookmarks}>
                            <BookmarkIcon />
                            Сохранить
                        </BookmarkAddButton>
                    )}
                    <RouteButton onClick={setCoordinatesForRoute}>
                        <RouteIcon />
                        Маршрут
                    </RouteButton>
                </ButtonsContainer>
            </InfoContainer>
        </div>
    );
};

export default InfoSection;
