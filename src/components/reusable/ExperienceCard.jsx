import React from "react";
import { FiMapPin } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const ExperienceCard = ({ logo, companyName, duration, position, type, location, description, onClickFunction, accordionContent, children, ...rest }) => {

    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="rounded-lg mt-2 mb-2 px-3 py-3 grid" {...rest}>
            <div onClick={(e) => {
                e.preventDefault();
            }}
            className="
            grid md:px-5 md:py-5 md:flex md:flex-row row-span-3 h-5/6
            ">  
                <div className="sm:basis-1/4 my-auto mx-auto">
                    <img
                        src={logo}
                        className="object-contain h-40 w-48"
                        alt={"company-logo"}
                    />
                </div>
                <div className="
                sm:ml-3 text-center sm:text-left sm:basis-3/4
                ">
                    <p className="text-3xl sm:text-4xl pb-1">{companyName}</p>
                    <ul className="pb-2 sm:pl-1">
                        <li className="pb-1"><b>{duration}</b></li> 
                        <li className="flex">
                            <i className="mr-1 mt-1"><BsBriefcase /></i>
                            <i>{position} - {type}</i>
                        </li>
                        <li className="flex">
                            <i className="mr-1 mt-1"><FiMapPin /></i>
                            <span>{location}</span>
                        </li>
                    </ul>
                    <p className="place-content-start sm:pl-1 text-left">
                        {description}
                    </p>
                </div>
            </div>

            <div className="align-bottom h-1/6">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} className="" />}>
                    <AccordionHeader className="text-gray-50 text-sm font-mono hover:text-gray-500" 
                    onClick={() => handleOpen(1)}>Click here to see more</AccordionHeader>
                        <AccordionBody className="text-sm text-gray-50">
                            { children }
                        </AccordionBody>
                </Accordion>
            </div>

        </div>
    )
}

export default ExperienceCard;