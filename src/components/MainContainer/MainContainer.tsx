'use client';

import React, { useState, useEffect } from 'react';
import { ChefHat, HelpCircle } from 'lucide-react';
import styles from './MainContainer.module.css';
import QuizSettings from '../SettingsContainer/SettingsContainer';

export default function MainContainer() {
    const [showInstructions, setShowInstructions] = useState("How to Play");
    const [difficulty, setDifficulty] = useState("Choose level")
    const [category, setCategory] = useState("Choose category")

    // Optional: React to difficulty changes
    useEffect(() => {
        if (difficulty !== "Choose level") {
            console.log('Difficulty changed to:', difficulty);
        }
    }, [difficulty]);
    
    useEffect(() => {
        if (category !== "Choose category") {
            console.log('Category changed to:', category);
        }
    }, [category]);

    const handleInstructionsClick = () => {
        setShowInstructions(prev => 
            prev === "How to Play" 
                ? "Choose your settings for difficulty and time. Then make sure you answer a minimum number of questions correctly before Chef Ramsay explodes!!" 
                : "How to Play"
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentStack}>
                {/* Logo Section */}
                <div className={styles.logoSection}>
                    <div className={styles.animatedIcon}>
                        <ChefHat size={40} />
                    </div>
                </div>

                {/* Instructions Button */}
                <button 
                    className={styles.instructionsButton}
                    onClick={handleInstructionsClick}
                >
                    <HelpCircle className={styles.buttonIcon} />
                    <span>{showInstructions}</span>
                </button>

                {/* Settings Section - will insert a quiz compoenent here */}
                <QuizSettings onDifficultyChange={setDifficulty} onCategoryChange={setCategory}  />
            </div>
        </div>
    );
}


