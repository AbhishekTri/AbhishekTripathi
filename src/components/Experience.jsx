import React from 'react';
import Section from './Section';
import { userData } from '../data/user';

const Experience = () => {
    return (
        <Section id="experience" title="Experience">
            <div className="relative max-w-5xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary/50 to-transparent transform md:-translate-x-1/2 ml-6 md:ml-0" />

                <div className="space-y-12 md:space-y-24">
                    {userData.experience.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            } group`}>
                            {/* Timeline Dot */}
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#050505] border-2 border-accent-primary rounded-full transform -translate-x-1/2 mt-1.5 z-10 group-hover:scale-125 group-hover:bg-accent-primary transition-all duration-300" />

                            {/* Content */}
                            <div className="md:w-1/2 ml-16 md:ml-0 px-4">
                                <div className={`glass p-8 rounded-2xl border-l-4 border-l-accent-primary transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.1)] ${index % 2 === 0 ? 'md:text-left origin-left' : 'md:text-right origin-right border-l-0 border-r-4 border-r-accent-primary'
                                    }`}>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-primary transition-colors">{exp.role}</h3>
                                    <h4 className="text-lg text-gray-300 font-mono mb-4">{exp.company}</h4>
                                    <div className={`flex items-center gap-2 text-sm text-gray-500 mb-6 font-mono ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                        }`}>
                                        <span>{exp.duration}</span>
                                        <span>•</span>
                                        <span>{exp.location}</span>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="md:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
