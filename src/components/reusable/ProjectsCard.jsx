import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProjectsCard = ({ projectImage, projectTitle, projectDate, onClickMethod , children, ...rest }) => {
    return (
        <Card className="w-full max-w-[48rem] flex-row bg-gray-50" {...rest}>
            <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
            <img
                src={projectImage}
                alt="project-image"
                className="h-full w-full object-cover ml-2"
            />
            </CardHeader>
            <CardBody>
            <Typography variant="h5" color="gray" className="mb-2 uppercase">
                {projectTitle}
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-2">
                {projectDate}
            </Typography>
            <Typography color="gray" className="mb-6 font-normal">
                {children}
            </Typography>
            <a href="#" className="inline-block">
                <Button onClick={(e) => {
                    e.preventDefault();
                    alert("You clicked learn more");
                }}
                variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                </svg>
                </Button>
            </a>
            </CardBody>
        </Card>
    );
};

export default ProjectsCard;
