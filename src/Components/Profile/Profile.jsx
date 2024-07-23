import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();

  const handleBack=()=>navigate(-1);
  return (
    <div>
      <section className={"z-5 flex items-center sticky top-0 bg-opacity-95"}>
        <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-5 text-x1 font-bold opacity-90 ml-5">
          Goliath Warlock
        </h1>
      </section>
      <section>
        <img  className='w-[100%] h-[15rem] object-cover' src="https://media.istockphoto.com/id/474267374/tr/foto%C4%9Fraf/reflections-on-a-lake.jpg?s=612x612&w=0&k=20&c=2U5lRIF1Nerr63BigwNqyebk4-OS8iA5EjFng9hsaDA=" alt="" />
      </section>
      <section>
        <div className="flex justify-between items-start mt-5 h-[5rem]">
            <Avatar alt="goliath warlock"
            src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
            sx={{width:"10rem",height:"10rem",border:"4px solid white" }}
                        />

        </div>
      </section>
    </div>
  );
};

export default Profile;
