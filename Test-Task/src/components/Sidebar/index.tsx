import { Button, Grid, Icon } from "@mui/material";
import Logo from "../../assets/svg/logo.svg";
import { BookmarkRounded, Login, Search } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Grid
      container
      alignItems={"center"}
      wrap="nowrap"
      width={"140px"}
      height={"100%"}
      paddingY={6}
      paddingX={5}
      bgcolor={"#fff"}
      direction={"column"}
    >
      <Icon sx={{ width: "100%", height: "50px", textAlign: "center" }}>
        <img height={"100%"} src={Logo} />
      </Icon>
      <Grid
        wrap="nowrap"
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Grid
          container
          wrap="nowrap"
          alignItems={"center"}
          direction={"column"}
        >
          <Button
            fullWidth
            sx={{ bgcolor: "#5E7BC7", height: "60px", marginY: 3 }}
          >
            <Search sx={{ color: "white", fontSize: 30 }} />
          </Button>
          <Button fullWidth sx={{ bgcolor: "#C75E5E", height: "60px" }}>
            <BookmarkRounded sx={{ color: "white", fontSize: 30 }} />
          </Button>
        </Grid>
        <Button fullWidth sx={{ bgcolor: "#808080", height: "60px" }}>
          <Login sx={{ color: "white", fontSize: 30 }} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
