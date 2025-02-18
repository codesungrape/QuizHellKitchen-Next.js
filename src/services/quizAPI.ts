import { DifficultyType, CategoryType, CATEGORY_IDS } from "@/types/quiz";



interface QuizParams {
    difficulty: DifficultyType;
    category: CategoryType;
}

// Define a consistent return type interface
export interface QuizApiResponse {
    data: any | null;  // You can make this more specific based on your API response
    error: string | null;
}

export async function fetchQuizQuestions({ difficulty, category }: QuizParams) : Promise<QuizApiResponse> {
    try {
         // Skip API call if empty values
        if (!difficulty || !category || difficulty === 'Choose level' || category === 'Choose category') {
            return { data: null, error: "Invalid parameters" };
        }

        const categoryId = CATEGORY_IDS[category as keyof typeof CATEGORY_IDS];
        console.log("CATEG_ID", categoryId)
        const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty.toLowerCase()}`;
        console.log('URL', url)
    
        const response = await fetch(url);
        const data = await response.json();
    
        if (data.response_code === 0) {
            return { data: data.results, error: null};
        }
        return { data: null, error: "Failed to fetch questions" };
    }
    catch( error) {
        throw new Error("Network error!")
    }
}