import StyledRadiusSelector from "./StyledRadiusSelector";

interface Props {
    onChange: (value: string) => void;
    value: number;
}

const SearchRadiusSelector = ({ value, onChange }: Props) => {
    return (
        <StyledRadiusSelector value={value.toString()} onChange={onChange} />
    );
};

export default SearchRadiusSelector;
