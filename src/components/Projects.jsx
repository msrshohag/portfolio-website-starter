import React, { useState, useEffect } from 'react'
import { projectsData } from '../data'
import { projectsNav } from '../data'

import Project from './Project'

const Projects = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter(
                (project) => {
                    return project.category.toLowerCase() ===
                        item.name;
                }
            );
            setProjects(newProjects);
        }
    }, [item]);
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() })
        setActive(index);
    };

    return (
        <div>
            <nav className='max-w-xl mx-auto mb-12'>
                <ul className='flex flex-row items-center text-white justify-evenly '>
                    {projectsNav.map((item, index) => {
                        return (
                            <li onClick={(e) => {
                                handleClick(e, index);
                            }}
                                className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                                key={index}
                            >
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
                {projects.map((item) => {
                    return <Project item={item} key={item.id} />;
                })}
            </section>
        </div>

    )
};
export default Projects