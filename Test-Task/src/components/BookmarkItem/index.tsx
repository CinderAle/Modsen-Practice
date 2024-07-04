import { useAction } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Sight } from "@/types/sight";
import { removeBookmark } from "@/utils/removeBookmark";

import {
    OpenBookmarkButton,
    OpenBookmarkIcon,
    RemoveBookmarkButton,
    RemoveBookmarkIcon,
} from "./styles/buttons";
import {
    ButtonsContainer,
    ImageNameContainer,
    ItemContainer,
} from "./styles/containers";
import { ItemImage } from "./styles/images";
import { ItemName, ItemText } from "./styles/text";

type Props = {
    place: Sight;
};

const BookmarkItem = ({ place }: Props) => {
    const login = useTypedSelector((state) => state.user.user.login);
    const { showSightInfo } = useAction();

    const remove = () => {
        removeBookmark(login, place);
    };

    const show = () => {
        showSightInfo(
            new Sight(
                place.id,
                place.title,
                place.photo,
                place.types,
                place.coordinates,
            ),
        );
    };

    return (
        <ItemContainer>
            <ImageNameContainer>
                <ItemImage width="100px" src={place.photo} />
                <ItemName>{place.title}</ItemName>
            </ImageNameContainer>
            <ItemText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                delectus recusandae.
            </ItemText>
            <ButtonsContainer>
                <RemoveBookmarkButton onClick={remove}>
                    <RemoveBookmarkIcon />
                </RemoveBookmarkButton>
                <OpenBookmarkButton onClick={show}>
                    <OpenBookmarkIcon />
                </OpenBookmarkButton>
            </ButtonsContainer>
        </ItemContainer>
    );
};

export default BookmarkItem;
