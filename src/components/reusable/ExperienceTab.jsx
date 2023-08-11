import React from "react";

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

const ExperienceTab = ({ logo, companyName, duration, position, type, location, description, onClickFunction, accordionContent }) => {

    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="border-2 rounded-lg mx-auto mt-5 mb-5 px-3 py-3 w-11/12 lg:w-7/12 ">
            <div onClick={(e) => {
                e.preventDefault();
                
            }}
            className="
            grid sm:px-5 sm:py-5 sm:flex
            ">
                <img
                    src={logo}
                    className="h-32 w-32 mx-auto"
                    alt={"company-logo"}
                />
                <div>
                    <p className="text-3xl sm:text-4xl pb-1">{companyName}</p>
                    <p className="pb-2">
                        {duration} 
                        <br /><i>{position} - {type}</i>
                        <br />{location}
                    </p>
                    <p className="place-content-start">
                        {description}
                    </p>
                </div>
            </div>

            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className="text-gray-50 text-sm font-mono hover:text-gray-500" 
                onClick={() => handleOpen(1)}>Click here to see more</AccordionHeader>
                    <AccordionBody className="text-sm text-gray-50">
                        { accordionContent }
                    </AccordionBody>
            </Accordion>
        </div>
    )
}

export default ExperienceTab;