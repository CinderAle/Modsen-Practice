import { Button, Grid, Icon } from "@mui/material";
import Logo from "../../assets/svg/logo.svg";
import { BookmarkRounded, Login, Search } from "@mui/icons-material";
import { useAction } from "@/hooks/useAction";

const Sidebar = () => {
  const { showBookmark, showFilter } = useAction();
  return (
    <Grid
      container
      alignItems={"center"}
      wrap="nowrap"
      width={"140px"}
      height={"100%"}
      paddingY={5}
      paddingX={5}
      bgcolor={"#fff"}
      direction={"column"}
    >
      <Icon sx={{ width: "100%", height: "40px", textAlign: "center" }}>
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
          marginTop={3}
        >
          <Button
            fullWidth
            sx={{ bgcolor: "#5E7BC7", height: "60px", marginY: 3 }}
            onClick={showFilter}
          >
            <Search sx={{ color: "white", fontSize: 30 }} />
          </Button>
          <Button
            fullWidth
            sx={{ bgcolor: "#C75E5E", height: "60px" }}
            onClick={showBookmark}
          >
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
