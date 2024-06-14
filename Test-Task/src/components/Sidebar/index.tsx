import { Box, Grid, Icon } from "@mui/material";
import Logo from "../../assets/svg/logo.svg";

const Sidebar = () => {
  return (
    <Box position={"absolute"} left={0} height={"100%"} zIndex={5}>
      <Grid
        container
        width={"140px"}
        height={"100%"}
        paddingTop={6}
        bgcolor={"#fff"}
      >
        <Icon sx={{ width: "100%", height: "50px", textAlign: "center" }}>
          <img height={"100%"} src={Logo} />
        </Icon>
      </Grid>
    </Box>
  );
};

export default Sidebar;
