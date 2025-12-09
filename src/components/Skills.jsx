import React from 'react';
import Section from './Section';
import { userData } from '../data/user';

const Skills = () => {
    return (
        <Section id="skills" title="Technical Arsenal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Backend & Architecture - Highlighted First */}
                <div className="bg-bg-card p-6 rounded-2xl border border-white/5 hover:border-accent-secondary/30 transition-all group">
                    <h3 className="text-xl font-bold mb-4 text-accent-secondary flex items-center gap-2">
                        <span className="text-2xl">⚙️</span> Backend & Core
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {userData.skills.backend.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/5 group-hover:border-accent-secondary/50 group-hover:text-white transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Frontend */}
                <div className="bg-bg-card p-6 rounded-2xl border border-white/5 hover:border-accent-primary/30 transition-all group">
                    <h3 className="text-xl font-bold mb-4 text-accent-primary flex items-center gap-2">
                        <span className="text-2xl">🎨</span> Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {userData.skills.frontend.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/5 group-hover:border-accent-primary/50 group-hover:text-white transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tools & DevOps */}
                <div className="bg-bg-card p-6 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all group">
                    <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                        <span className="text-2xl">🛠️</span> Tools & DevOps
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {userData.skills.tools.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/5 group-hover:border-green-500/50 group-hover:text-white transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-accent-secondary/5 rounded-full blur-[100px] -z-10" />
        </Section>
    );
};

export default Skills;
