import { Icon } from "@mui/material";
import Logo from "@/assets/svg/logo.svg";

const MappieIcon = () => {
  return (
    <Icon sx={{ width: "100%", height: "40px", textAlign: "center" }}>
      <img height={"100%"} src={Logo} />
    </Icon>
  );
};

export default MappieIcon;
