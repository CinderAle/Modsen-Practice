import { Typography } from "@mui/material";

interface Props {
  children: string;
}

const StyledSelectorHeader = ({ children }: Props) => {
  return <Typography variant="h3">{children}</Typography>;
};

export default StyledSelectorHeader;
