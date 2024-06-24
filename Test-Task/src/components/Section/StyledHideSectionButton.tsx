import { ArrowLeftRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

interface Props {
  hideSection: () => void;
}

const StyledHideSectionButton = ({ hideSection }: Props) => {
  return (
    <Button
      sx={{
        minWidth: "45px",
        height: "80px",
        bgcolor: "white",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }}
      onClick={hideSection}
    >
      <ArrowLeftRounded sx={{ fontSize: 30, color: "#333" }} />
    </Button>
  );
};

export default StyledHideSectionButton;
