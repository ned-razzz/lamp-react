import { useState, useCallback } from "react";
import apiClient from "./client.ts";
import type { TodayBibleResponse } from "../types/dailyBible.ts";

interface UseDailyBible {
    // GET /today 상태
    todayBible: TodayBibleResponse | null;
    isLoadingTodayBible: boolean;
    todayBibleError: Error | null;

    // API 호출 함수
    fetchTodayBible: () => Promise<void>;
}

export const useDailyBible = (): UseDailyBible => {
    // GET /today 관련 상태
    const [todayBible, setTodayBible] = useState<TodayBibleResponse | null>(null);
    const [isLoadingTodayBible, setIsLoadingTodayBible] = useState<boolean>(false);
    const [todayBibleError, setTodayBibleError] = useState<Error | null>(null);

    /**
     * 오늘의 성경 구절을 가져옵니다 (GET /daily-bible/today)
     */
    const fetchTodayBible = useCallback(async () => {
        setIsLoadingTodayBible(true);
        setTodayBibleError(null);
        try {
            const response = await apiClient.get<TodayBibleResponse>("/daily-bible/today");
            setTodayBible(response.data);
        } catch (err) {
            setTodayBibleError(err as Error);
        } finally {
            setIsLoadingTodayBible(false);
        }
    }, []);

    return {
        todayBible,
        isLoadingTodayBible,
        todayBibleError,
        fetchTodayBible,
    };
};
