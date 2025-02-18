'use client';

import React, { useState } from 'react';
import { ChefHat, Settings, HelpCircle } from 'lucide-react';
import styles from './MainContainer.module.css';
import QuizSettings from '../SettingsContainer/SettingsContainer';

export default function MainContainer() {
    const [showInstructions, setShowInstructions] = useState("How to Play");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                      {/* Difficulty Selection */}
                <QuizSettings />
            </div>
        </div>
    );
}