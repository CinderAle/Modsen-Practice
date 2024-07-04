import { RadiusSelector } from "./styles/selector";
import { Header, Hint } from "./styles/text";

interface Props {
    onChange: (value: string) => void;
    value: number;
}

const SearchRadiusSelector = ({ value, onChange }: Props) => {
    return (
        <div>
            <Header>В радиусе</Header>
            <RadiusSelector
                onChange={(e) => {
                    onChange(e.currentTarget.value);
                }}
                value={value}
            />
            <Hint>км</Hint>
        </div>
    );
};

export default SearchRadiusSelector;
