import { Search } from "@mui/icons-material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from "@mui/material/Button";

const RightPart = () => {
  const handleChangeTheme = () => {
    console.log("handle change theme");
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500 " />
        </div>
        <Brightness4Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">New Features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-x1 py-1"> What's happening</h1>
        <div>
          <p className="text-sm">
          Spor · Gündemdekiler
           
          </p>
          <p className='font-bold'>
          İbrahim Hacıosmanoğlu
          </p>
        </div>
      {[1,1,1].map((item)=><div className='flex justify-between w-full'>
                <div>
                    <p>Entertainment · Trending</p>
                    <p className="font-bold">#TheMarvels</p>
                    <p>33.4k Tweets</p>
                
                </div>
                <MoreHorizIcon/>

            </div> ) }
            
      </section>
    </div>
  );
};

export default RightPart;
