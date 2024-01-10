import React from "react";
import Workitems from "./workitems.jsx";

const data = [
    {
        title: 'webdevlopmet',
        duration: '2 years',
        details: 'Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network'
    },
    {
        title: 'sketch',
        duration: '10 years',
        details: 'sketch, traditionally a rough drawing or painting in which an artist notes down his preliminary ideas for a work that will eventually be realized with greater precision and detail. The term also applies to brief creative pieces that per se may have artistic merit. Raphael: Madonna and Child'
    },
    {
        title: 'photographer',
        duration: '4 years',
        details: 'Photography is the art, application, and practice of creating images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.',
    },
    {
        title: 'DevOps',
        duration: '1 year',
        details: 'DevOps is a methodology in the software development and IT industry. Used as a set of practices and tools, DevOps integrates and automates the work of software development and IT operations as a means for improving and shortening the systems',
    }
];

function Work() {
    return (
        <div  className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-blue-400">Work</h1>
            {
                data.map((items, id) => (
                    <Workitems
                        key={id}
                        title={items.title}
                        duration={items.duration}
                        details={items.details}
                    />
                ))
            }
        </div>
    );
}

export default Work;
