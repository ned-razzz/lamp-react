// DailyVerseResponse
export interface DailyVerse {
    ordinal: number;
    text: string;
}

// TodayBibleResponse
export interface TodayBibleResponse {
    bookName: string;
    chapterOrdinal: number;
    verses: DailyVerse[];
}
