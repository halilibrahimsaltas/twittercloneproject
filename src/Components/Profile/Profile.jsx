import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from "../HomeSection/TweetCard";
import { CottageSharp } from "@mui/icons-material";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Profile = () => {
  const[tabValue,setTabValue]=useState("1");
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const handleOpenProfileModel = () => {
    console.log("open profile model");
  };
  const handleFollowUser = () => {
    console.log("open follow user ");
  };

  const handleTabChange=(event, newValue)=>{
    setTabValue(newValue)

    if(newValue==4){
      console.log("likes twit")
    }
    else if(newValue==1){
      console.log("users twits")
    }
  };
  return (
    <div>
      <section className={" bg-white z-5 flex items-center sticky top-0 bg-opacity-95"}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-x1 font-bold opacity-90 ml-5">
          Goliath Warlock
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://media.istockphoto.com/id/474267374/tr/foto%C4%9Fraf/reflections-on-a-lake.jpg?s=612x612&w=0&k=20&c=2U5lRIF1Nerr63BigwNqyebk4-OS8iA5EjFng9hsaDA="
          alt=""
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="goliath warlock"
            src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Goaliath Warlock</h1>
            {true && (
              <img
                className="m1-2 w-5 h-5"
                src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"
                alt=""
              />
            )}
          </div>
          <h1 className="text-gray-500">@warlockgoliath
          </h1>
        </div>
        <div className="mt-2 space-y-3">

          <p>Hello, ı m code with react and spring boot. You can visit  my project from halilsaltas.com.tr</p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon/>
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon/>
              <p className="ml-2">Türkiye</p>
            </div>

            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon/>
              <p className="ml-2">Joined July 2024</p>
            </div>
            


          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
                <span>284</span>
                <span className="text-gray-500">Following</span>

              </div>
              <div className="flex items-center space-x-1 font-semibold">
                <span>353</span>
                <span className="text-gray-500">Followers</span>

              </div>

            </div>


        </div>
      </section>
      <section>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
         { [1,1,1,1].map((item)=><TweetCard/>)}
        </TabPanel>
        <TabPanel value="2">users replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>

      </section>
    </div>
  );
};

export default Profile;
