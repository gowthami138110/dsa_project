import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DsaLearningPlatform = () => {
    const [topics, setTopics] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Load topics from localStorage
    useEffect(() => {
        const storedTopics = JSON.parse(localStorage.getItem('topics')) || [];
        setTopics(storedTopics);
    }, []);

    // Save topics to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('topics', JSON.stringify(topics));
    }, [topics]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredTopics = topics.filter(topic => 
        topic.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>DSA Learning Platform</h1>
            <motion.input 
                type="text" 
                placeholder="Search Topics" 
                value={searchTerm} 
                onChange={handleSearch} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            <motion.ul>
                {filteredTopics.map(topic => (
                    <motion.li 
                        key={topic.id} 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {topic.name}
                    </motion.li>
                ))}
            </motion.ul>
            {/* Statistics Dashboard Logic Here */}
        </div>
    );
};

export default DsaLearningPlatform;