import React from 'react';
import Section from './Section';
import { userData } from '../data/user';

const Projects = () => {
    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userData.projects.map((project, index) => (
                    <div key={index} className="group relative">
                        {/* Subtle Glow on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                        <div className="relative h-full bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:border-accent-primary/30 group-hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                            <div className="mb-4 flex justify-between items-start">
                                <h3 className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors duration-300">
                                    {project.name}
                                </h3>
                                {/* Arrow Icon that appears directly on hover */}
                                <div className="text-accent-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    ↗
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors border border-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
