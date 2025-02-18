'use client';

import React, { useState, useEffect } from 'react';
import { ChefHat, HelpCircle } from 'lucide-react';
import QuizSettings from '../SettingsContainer/SettingsContainer';
import { fetchQuizQuestions } from '@/services/quizAPI';
import { DifficultyType, CategoryType } from '@/types/quiz';
import styles from './MainContainer.module.css';


// Define initial states as valid types
const INITIAL_DIFFICULTY: DifficultyType = 'Choose level';  // empty string as initial state
const INITIAL_CATEGORY: CategoryType = 'Choose category'; 

export default function MainContainer() {
    const [showInstructions, setShowInstructions] = useState("How to Play");
    const [difficulty, setDifficulty] = useState<DifficultyType>(INITIAL_DIFFICULTY);
    const [category, setCategory] = useState<CategoryType>(INITIAL_CATEGORY);
    const [questions, setQuestions] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Optional: React to difficulty changes
    useEffect(() => {
       async function getQuestions() {
        if (difficulty && category && difficulty !== 'Choose level' && category !== 'Choose category') {
            setIsLoading(true);
            setError(null);

            try {
                const { data, error: apiError } = await fetchQuizQuestions({ 
                    difficulty: difficulty as DifficultyType, 
                    category: category as CategoryType 
                });
                if (apiError) {
                    setError(apiError);
                } else {
                    setQuestions(data);
                }
            }
            catch (err) {
                setError("An unexpected error occured");
            } finally {
                setIsLoading(false);
            }
        }
       }
       getQuestions()
    }, [difficulty, category]);

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
                   {/* Show loading state */}
                {isLoading && <div>Loading questions...</div>}
                
                {/* Show error if exists */}
                {error && (
                    <div className={styles.error}>
                        {error}
                    </div>
                )}
                 {/* Show questions when loaded */}
                {questions && (
                    <div>
                        {/* You can map through questions here */}
                        {/* This will remove the 'never used' warning */}
                    </div>
                )}


                {/* Instructions Button */}
                <button 
                    className={styles.instructionsButton}
                    onClick={handleInstructionsClick}
                >
                    <HelpCircle className={styles.buttonIcon} />
                    <span>{showInstructions}</span>
                </button>

                {/* Settings Section - will insert a quiz compoenent here */}
                <QuizSettings 
                    difficulty={difficulty}
                    category={category}
                    onDifficultyChange={setDifficulty}
                    onCategoryChange={setCategory}  
                />
            </div>
        </div>
    );
}



