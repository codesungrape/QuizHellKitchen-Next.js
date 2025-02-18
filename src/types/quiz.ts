// types/quiz.ts
export type DifficultyType = 'Choose level' | 'easy' | 'medium' | 'hard';
export type CategoryType = 'Choose category' | 'General Knowledge' | 'Animals' | 'Mythology';

// Map for display names to API category IDs
export const CATEGORY_IDS: Record<Exclude<CategoryType, 'Choose category'>, number> = {
    'General Knowledge': 9,
    'Animals': 27,
    'Mythology': 20
};

export interface Category {
    value: CategoryType;
    label: string;
}

export interface Difficulty {
    value: DifficultyType;
    label: string;
}