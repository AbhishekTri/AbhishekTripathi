import React from 'react';
import { userData } from '../data/user';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-[#050505]">
            {/* Background Elements */}
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-screen pointer-events-none"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8 animate-fade-in-up">
                    <div className="space-y-2">
                        <h2 className="text-accent-primary font-mono text-lg tracking-wide">
                            HELLO WORLD, I'M
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                            <span className="text-gradient hover:text-white transition-colors duration-500 block">
                                {userData.name}
                            </span>
                        </h1>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-3xl md:text-4xl font-light text-gray-300">
                            <span className="text-white font-semibold">{userData.role}</span>
                        </h3>
                        <p className="text-gray-400 max-w-lg leading-relaxed text-lg">
                            {userData.headline}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#contact" className="btn btn-primary shadow-lg shadow-accent-primary/20">
                            Let's Talk
                        </a>
                        <a href="#projects" className="btn btn-outline">
                            My Work
                        </a>
                    </div>

                    <div className="pt-8 flex gap-6 text-gray-400">
                        {/* Social Links would go here, map from userData.links */}
                        {Object.entries(userData.links).map(([key, url]) => (
                            <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors capitalize">
                                {key}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Visual Element */}
                <div className="relative hidden md:block perspective-1000">
                    <div className="relative z-10 glass p-1 rounded-2xl rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out preserve-3d group">
                        <div className="bg-[#0a0a0a]/90 p-8 rounded-xl border border-white/5 shadow-2xl backdrop-blur-sm">
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <code className="text-sm font-mono text-gray-300 leading-relaxed">
                                <span className="text-accent-secondary">const</span> <span className="text-yellow-300">developer</span> <span className="text-white">=</span> <span className="text-accent-primary">{"{"}</span><br />
                                &nbsp;&nbsp;name: <span className="text-green-400">'{userData.name}'</span>,<br />
                                &nbsp;&nbsp;role: <span className="text-green-400">'{userData.role}'</span>,<br />
                                &nbsp;&nbsp;skills: [<br />
                                {userData.skills.backend.slice(0, 5).map(skill => (
                                    <React.Fragment key={skill}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">'{skill}'</span>,<br />
                                    </React.Fragment>
                                ))}
                                &nbsp;&nbsp;],<br />
                                &nbsp;&nbsp;hireable: <span className="text-accent-primary">true</span>,<br />
                                <span className="text-accent-primary">{"}"}</span>;
                            </code>
                        </div>
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 blur-3xl rounded-full -z-10" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
