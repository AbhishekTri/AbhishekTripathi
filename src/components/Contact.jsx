import React from 'react';
import Section from './Section';
import { userData } from '../data/user';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isHere, setIsHere] = React.useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct Mailto Link
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:${userData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Open Mail Client
        window.location.href = mailtoLink;

        // Show success state and reset form
        setIsHere(true);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        // Reset success message after 3 seconds
        setTimeout(() => setIsHere(false), 5000);
    };

    return (
        <Section id="contact" title="Get in Touch">
            <div className="grid md:grid-cols-2 gap-12 items-start relative">
                {/* Background Glow */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent-primary/10 rounded-full blur-[100px] -z-10" />

                <div className="space-y-8">
                    <div>
                        <h3 className="text-3xl font-bold mb-4 text-white">Let's Connect</h3>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <a
                            href={`mailto:${userData.email}`}
                            className="flex items-center gap-5 group p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
                        >
                            <div className="w-14 h-14 bg-[#111] rounded-full flex items-center justify-center border border-white/10 group-hover:border-accent-primary/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                                <span className="text-2xl">✉️</span>
                            </div>
                            <div>
                                <h4 className="text-gray-500 text-sm font-mono mb-1">Email Me</h4>
                                <span className="text-xl text-white group-hover:text-accent-primary transition-colors">{userData.email}</span>
                            </div>
                        </a>

                        <a
                            href={userData.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-5 group p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
                        >
                            <div className="w-14 h-14 bg-[#111] rounded-full flex items-center justify-center border border-white/10 group-hover:border-accent-primary/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                                <span className="text-2xl">💼</span>
                            </div>
                            <div>
                                <h4 className="text-gray-500 text-sm font-mono mb-1">LinkedIn</h4>
                                <span className="text-xl text-white group-hover:text-accent-primary transition-colors">Connect with me</span>
                            </div>
                        </a>
                        <a
                            href={userData.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-5 group p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
                        >
                            <div className="w-14 h-14 bg-[#111] rounded-full flex items-center justify-center border border-white/10 group-hover:border-accent-primary/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <div>
                                <h4 className="text-gray-500 text-sm font-mono mb-1">Website</h4>
                                <span className="text-xl text-white group-hover:text-accent-primary transition-colors">Personal Site</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-secondary/10 rounded-full blur-[80px] -z-10" />

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#0a0a0a] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all text-white placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#0a0a0a] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all text-white placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-mono text-gray-400 ml-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#0a0a0a] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all text-white placeholder-gray-600"
                                placeholder="Collaboration"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-mono text-gray-400 ml-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full bg-[#0a0a0a] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all text-white placeholder-gray-600"
                                placeholder="Write your message here..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full py-4 text-lg font-semibold shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 relative">
                            {isHere ? 'Opening Mail Client...' : 'Send Message'}
                        </button>
                        {isHere && <p className="text-green-400 text-center text-sm mt-2">Form reset! Check your email client drafts.</p>}
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
