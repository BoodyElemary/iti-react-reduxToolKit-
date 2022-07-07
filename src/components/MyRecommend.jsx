import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
function MyRecommend() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="p-3 ">
      <h3 className="fw-bold"> Top-featured</h3>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary="Best of the year" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <AutoGraphIcon />
            </ListItemIcon>
            <ListItemText primary="Popular in 2021" />
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <MilitaryTechIcon />
            </ListItemIcon>
            <ListItemText primary="Top games of all time" />
          </ListItemButton>
        </List>
        <Divider />
      </Box>
    </div>
  );
}

export default MyRecommend;
