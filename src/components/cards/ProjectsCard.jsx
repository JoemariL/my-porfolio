import React, { Children } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProjectsCard = ({ projectTitle, projectDate, children, ...rest }) => {
    return (
        <div className="grid border border-blue-gray-800 p-4 rounded-xl shadow-xl" {...rest}>
            <div className="font-semibold text-3xl text-center text-amber-200"> 
                <h1>
                    {projectTitle} 
                </h1>
                
            </div>

            <div className="font-light text-xl text-center mt-2"> 
                {projectDate} 
            </div>

            <div className="text-md mt-10 sm:mt-15 w-full text-left"> 
                {children} 
            </div>

            <div className="text-left mt-10 font-extralight">
                Website url here: 
            </div>
        </div>
    );
};

export default ProjectsCard;
