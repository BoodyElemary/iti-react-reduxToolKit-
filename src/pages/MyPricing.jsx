import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCard from "../components/MyCard";
import MyControls from "../components/MyControls";
import MyRecommend from "../components/MyRecommend";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
function MyPricing() {
  const [page, setPage] = useState(1);
  const [games, setGames] = useState([]);
  const [grid, setGrid] = useState(3);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=1c437533bbcc4d79a281bd81eb986fcb&page=${page}&page_size=30`
      )
      .then((response) => {
        setGames(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [page]);
  return (
    <div className=" d-flex justify-content-center gap-5 pt-4">
      <div className="controls col-2 ">
        {" "}
        <MyControls></MyControls>
        <MyRecommend></MyRecommend>
      </div>
      <div className="col-8">
        <div className=" d-flex justify-content-center gap-5 pb-5 align-items-center  ">
          <TextField
            label="search"
            id="fullWidth"
            className="col-6 "
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="d-flex gap-2">
            <IconButton
              color="default"
              size="large"
              onClick={(event, grid) => setGrid(10)}
            >
              <ViewCompactIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="default"
              size="large"
              onClick={(event, grid) => setGrid(3)}
            >
              <ViewModuleIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="default"
              size="large"
              onClick={(event, grid) => setGrid(2)}
            >
              <ViewComfyIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>

        <div className="d-flex flex-wrap  justify-content-center gap-4 ">
          {games
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return value;
              }
            })
            .map((game) => (
              <MyCard game={game} key={game.id} grid={grid} />
            ))}
        </div>

        <div className="d-flex justify-content-center pt-5">
          <Stack spacing={2}>
            <Pagination
              count={100}
              variant="outlined"
              color="error"
              onChange={(event, value) => setPage(value)}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default MyPricing;
