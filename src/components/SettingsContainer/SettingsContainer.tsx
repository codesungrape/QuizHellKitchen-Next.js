import React from 'react';
import { useState } from 'react';
import { NativeSelect, Group } from '@mantine/core';

export default function QuizSettings() {


   return (
    <div className="settings-section">
        <Group >
        <NativeSelect label="Choose Difficulty" description="Click the drop-down menu for options" data={['Easy', 'Medium', 'Hard']} />
        {/* <NativeSelect label="Choose Difficulty" description="Click the drop-down menu for options" data={['Easy', 'Medium', 'Hard']} /> */}
        </Group>
    </div>
   )}