import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
    console.log(useParams())

    const aboutData = [
        {
            slug: "about-app",
            title: "About the App",
            description: "In this app you can add, delete, submit, and edit itesm."
        },
        {
            slug: "about-author",
            title: "About the author",
            description: "This app was made by J"
        }
    ];
    const { slug } = useParams();
    const aboutContent = aboutData.find(item => item.slug === slug)
    const {title, description} = aboutContent;
    return(
        <div className="main__content">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default SinglePage;