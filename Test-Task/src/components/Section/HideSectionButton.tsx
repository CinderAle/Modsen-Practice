import { ArrowIcon, HideButton } from "./styles/button";

interface Props {
    hideSection: () => void;
}

const HideSectionButton = ({ hideSection }: Props) => {
    return (
        <HideButton onClick={hideSection}>
            <ArrowIcon />
        </HideButton>
    );
};

export default HideSectionButton;
