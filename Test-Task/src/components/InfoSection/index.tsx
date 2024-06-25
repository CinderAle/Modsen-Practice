import { Sight } from "@/types/Sight";

interface Props {
    info: Sight;
}

const InfoSection = ({ info }: Props) => {
    return <div>{info.address}</div>;
};

export default InfoSection;
