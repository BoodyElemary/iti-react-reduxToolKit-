import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/cartSlice";

function MyCard({ game, grid, value }) {
  let price = Math.floor(Math.random() * 31) + 50;

  const dispatch = useDispatch();
  const handleAddTocart = (game) => {
    dispatch(addToCart(game));
  };
  return (
    <div className={`col-${grid}`}>
      <Card key={game.id} className="h-100">
        <div className="">
          <div className="">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={game?.background_image}
                className="img-fluid"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {game?.genres.map((genre) => {
                    let out = genre.name + ",";

                    return out;
                  })}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {game?.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </div>
          <div className="">
            <CardActions className="d-flex justify-content-between p-3">
              <Typography gutterBottom variant="h5">
                $ {price}
              </Typography>{" "}
              <IconButton
                color="error"
                aria-label="add to shopping cart"
                onClick={() => handleAddTocart(game)}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MyCard;
