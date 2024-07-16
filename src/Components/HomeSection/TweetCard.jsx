import { Repeat } from "@mui/icons-material";
import React from "react";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RepeatIcon from '@mui/icons-material/Repeat';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';


const TweetCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleDeleteTweet=()=>{
        console.log('delete tweet')
        handleClose();

    }
  const navigate = useNavigate();
  
  return (
    <div className="">
      {/*<div className='flex items-center font-semibold text-gray-700 py-2'>
            <RepeatIcon/>

        </div>*/}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate("/profile/${6}")}
          className="cursor-pointer"
          alt="username"
          src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Code With Me</span>
              <span className="text-gray-600">@codewithme . 2m</span>
              <img
                className="m1-2 w-5 h-5"
                src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"
                alt=""
              />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
           <div className="mt-2">
             <div className="cursor-pointer" >
                <p>twitter clone - full stack project with spring bott and react</p>
                <img  className="w-[28rem] h-[35rem] border border-gray-400 p-5 rounded-md  " src="https://photo-cdn2.icons8.com/uxXuJ8pCgdN0SS-ZuRkOg_b0RNKqqSC3Zhvy-6zOuzw/rs:fit:715:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi83YWNjZGEwNmQ0/MTc0NzllODNiODY2/NDE1N2ZhYTgxMy5q/cGc.jpg" alt="" />

             </div>
             <div className="py-5 flex flex-wrap justify-between items-center">
                <div className="space-x-3 flex items-center text-gray-600">
                    

                </div>



             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
