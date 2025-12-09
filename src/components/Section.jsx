import React from 'react';

const Section = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`py-20 md:py-32 relative ${className}`}>
            <div className="container mx-auto px-6">
                {title && (
                    <div className="mb-16 md:mb-24 animate-on-scroll">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            <span className="text-gradient hover:text-white transition-colors duration-500">
                                {title}
                            </span>
                            <span className="text-accent-primary">.</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-accent-primary rounded-full" />
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
