import React from 'react';
import { useState } from 'react';
import { NativeSelect, Group } from '@mantine/core';

export default function QuizSettings() {


   return (
    <div className="settings-section">
        <Group >
        <NativeSelect 
            label="Select Difficulty" 
            description="Click the drop-down menu for options" 
            data={[{ value: '', label: 'Choose level' },'Easy', 'Medium', 'Hard']} 
        />
        <NativeSelect 
            label="Select Category" 
            description="Click the drop-down menu for options" 
            data={[{ value: '', label: 'Choose a category' },'General Knowledge', 'Animals', 'Mythology']} 
        />
        
        </Group>
    </div>
   )}