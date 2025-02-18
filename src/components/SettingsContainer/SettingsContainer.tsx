import React, { useState } from 'react';
import { NativeSelect, Group } from '@mantine/core';
import styles from './SettingsContainer.module.css'


// Define the props interface
interface QuizSettingsProps {
    onDifficultyChange: (value: string) => void;
}

export default function QuizSettings( {onDifficultyChange }: QuizSettingsProps ) {


   return (
    <div className="settings-section">
        <Group className={styles.container}>
        <NativeSelect 
            label="Select Difficulty" 
            description="Click the drop-down menu for options" 
            data={[{ value: '', label: 'Choose level' },'Easy', 'Medium', 'Hard']}
            classNames={{
                description: styles.selectDescription
            }}
            onChange={(e) => onDifficultyChange(e.currentTarget.value)}
        />
        <NativeSelect 
            label="Select Category" 
            description="Click the drop-down menu for options" 
            data={[{ value: '', label: 'Choose a category' },'General Knowledge', 'Animals', 'Mythology']}
            classNames={{
                description: styles.selectDescription
            }}
        />

        </Group>
    </div>
   )}