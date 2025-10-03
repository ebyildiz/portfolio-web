import React from "react"

export default function ProjectItem({ title, image, link, description }:{title:string, image:string, link:string, description:string}) {
    return (
        <section className='project-item'>
            <h2 className='project-title'>{title}</h2>
            <a target="_blank" href={link}>Link to Project</a>
            <div className='image-container'>
                <a target="_blank" href={link}><img src={image} className='regular-size'></img></a>
                <p className='project-summary'>{description}</p>
            </div>
        </section>
    )
}