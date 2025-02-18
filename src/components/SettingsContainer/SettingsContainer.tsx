import React from 'react';
import { NativeSelect, Group } from '@mantine/core';
import styles from './SettingsContainer.module.css';
import { DifficultyType, CategoryType } from '../../types/quiz'


// Define the props interface
interface QuizSettingsProps {
    onDifficultyChange: (value: DifficultyType) => void;
    onCategoryChange: (value: CategoryType) => void;
    difficulty: DifficultyType;
    category: CategoryType;
}

export default function QuizSettings( {
    onDifficultyChange, 
    onCategoryChange,
    difficulty,
    category,
 }: QuizSettingsProps ) {


   return (
    <div className="settings-section">
        <Group className={styles.container}>
        <NativeSelect 
            label="Select Difficulty" 
            value={difficulty}
            description="Click the drop-down menu for options" 
            data={ [
                { value: 'Choose level', label: 'Choose level' },
                { value: 'easy', label: 'Easy' },
                { value: 'medium', label: 'Medium' },
                { value: 'hard', label: 'Hard' }
            ] }

            onChange={(e) => onDifficultyChange(e.currentTarget.value as DifficultyType)}
        />
        <NativeSelect 
            label="Select Category" 
            value={category}
            description="Click the drop-down menu for options" 
            data={[
                { value: 'Choose category', label: 'Choose category' },
                { value: 'General Knowledge', label: 'General Knowledge' },
                { value: 'Animals', label: 'Animals' },
                { value: 'Mythology', label: 'Mythology' }
            ]}
            onChange={(e) => onCategoryChange(e.currentTarget.value as CategoryType)}
        />

        </Group>
    </div>
   )}