import React from 'react';
import { userData } from '../data/user';

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-white/5 text-center relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} <span className="text-white font-medium">{userData.name}</span>. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* Add Social Icons here if needed, or keeping it clean */}
                        <a href="#" className="text-gray-500 hover:text-accent-primary transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-accent-primary transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
