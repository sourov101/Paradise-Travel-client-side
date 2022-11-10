import React from 'react';
import { Helmet } from 'react-helmet';
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const Blog = () => {

    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };


    return (




        <div className='m-20'>
            <Helmet>
                <title>Paradise Travel: Blog</title>
            </Helmet>
            <div>
                <h1 className='text-3xl mt-5 font-semibold mb-4 align-center'>Our Blog Page</h1>
            </div>
            <Fragment>
                <Accordion className='my-10' open={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        Difference between SQL and NoSQL?
                    </AccordionHeader>
                    <AccordionBody>
                        SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
                        NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.
                    </AccordionBody>
                </Accordion>
                <Accordion className='my-10' open={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        What is JWT, and how does it work?
                    </AccordionHeader>
                    <AccordionBody>
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    </AccordionBody>
                </Accordion>
                <Accordion className='my-10' open={open === 3}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        What is the difference between javascript and NodeJS?
                    </AccordionHeader>
                    <AccordionBody>
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.
                        Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </AccordionBody>
                </Accordion>
                <Accordion className='my-10' open={open === 4}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                        How does NodeJS handle multiple requests at the same time?
                    </AccordionHeader>
                    <AccordionBody>
                        How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    </AccordionBody>
                </Accordion>
            </Fragment>
        </div>
    );
};

export default Blog;