import React, { useState, useEffect, useRef } from 'react';
import { userData } from '../data/user';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { type: 'info', content: 'Welcome to Abhishek\'s Portfolio Terminal v1.0.0' },
        { type: 'info', content: 'Type "help" to see available commands.' }
    ]);
    const inputRef = useRef(null);
    const terminalBodyRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [output]);

    const handleCommand = (cmd) => {
        const command = cmd.trim().toLowerCase();
        let response = [];

        switch (command) {
            case 'help':
                response = [
                    { type: 'success', content: 'Available commands:' },
                    { type: 'info', content: '  about        - View professional summary' },
                    { type: 'info', content: '  skills       - List technical skills (JSON format)' },
                    { type: 'info', content: '  experience   - Show career timeline' },
                    { type: 'info', content: '  contact      - Display contact info' },
                    { type: 'info', content: '  clear        - Clear terminal' }
                ];
                break;
            case 'about':
                response = [{ type: 'success', content: userData.about }];
                break;
            case 'skills':
                response = [
                    { type: 'success', content: 'Loading modules...' },
                    { type: 'info', content: JSON.stringify(userData.skills, null, 2) }
                ];
                break;
            case 'experience':
                userData.experience.forEach(exp => {
                    response.push({ type: 'highlight', content: `${exp.role} @ ${exp.company}` });
                    response.push({ type: 'info', content: `  ${exp.duration} | ${exp.location}` });
                    response.push({ type: 'info', content: `  > ${exp.description}` });
                    response.push({ type: 'info', content: '' }); // Spacer
                });
                break;
            case 'contact':
                response = [
                    { type: 'info', content: `Email: ${userData.email}` },
                    { type: 'info', content: `LinkedIn: ${userData.links.linkedin}` },
                    { type: 'info', content: `Website: ${userData.links.website}` }
                ];
                break;
            case 'clear':
                setOutput([]);
                return;
            case '':
                return;
            default:
                response = [{ type: 'error', content: `Command not found: ${command}. Type "help" for valid commands.` }];
        }

        setOutput(prev => [
            ...prev,
            { type: 'command', content: `visitor@portfolio:~$ ${cmd}` },
            ...response
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-20 p-4">
            <div className="bg-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden border border-gray-800 font-mono text-sm sm:text-base">
                {/* Terminal Header */}
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-gray-400 text-xs">abhishek@server: ~</span>
                </div>

                {/* Terminal Body */}
                <div ref={terminalBodyRef} className="p-4 h-[400px] overflow-y-auto custom-scrollbar" onClick={() => inputRef.current?.focus()}>
                    {output.map((line, index) => (
                        <div key={index} className="mb-1 whitespace-pre-wrap">
                            {line.type === 'command' && <span className="text-gray-400 mr-2">➜</span>}
                            <span className={`
                                ${line.type === 'command' ? 'text-white font-bold' : ''}
                                ${line.type === 'error' ? 'text-red-400' : ''}
                                ${line.type === 'success' ? 'text-green-400' : ''}
                                ${line.type === 'highlight' ? 'text-accent-primary' : ''}
                                ${line.type === 'info' ? 'text-gray-300' : ''}
                            `}>
                                {line.content}
                            </span>
                        </div>
                    ))}

                    {/* Input Line */}
                    <div className="flex items-center mt-2">
                        <span className="text-green-400 mr-2">visitor@portfolio:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0"
                        />
                    </div>
                    <div ref={bottomRef} />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
