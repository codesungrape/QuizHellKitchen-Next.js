import React, {useState} from 'react';

export default function QuizSettings() {


   return <div className="settings-section">
        <label>Difficulty Level</label>
        <div className="difficulty-buttons">
        {(['easy', 'medium', 'hard'] as const).map((level: 'easy' | 'medium' | 'hard') => (
            <button
            key={level}
            >
            {level}
            </button>
        ))}
        </div>
    </div>
}