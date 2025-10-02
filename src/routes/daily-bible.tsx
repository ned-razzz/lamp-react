import { createFileRoute } from "@tanstack/react-router";
import { Card, Button } from "../_design_system";
import { useEffect } from "react";
import { LuBookOpenCheck } from "react-icons/lu";
import { useDailyBible } from "../api/useDailyBible";

export const Route = createFileRoute("/daily-bible")({
    component: DailyBiblePage,
});

function DailyBiblePage() {
    const { todayBible, isLoadingTodayBible, todayBibleError, fetchTodayBible } = useDailyBible();

    useEffect(() => {
        fetchTodayBible();
    }, [fetchTodayBible]);

    const today = new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    if (isLoadingTodayBible) {
        return <div>Loading...</div>;
    }

    if (todayBibleError) {
        return <div>Error: {todayBibleError.message}</div>;
    }

    if (!todayBible) {
        return <div>No data</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto p-4 max-w-3xl">
                <Card className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-0">
                    <div className="text-center p-8 border-b border-gray-200">
                        <p className="text-base text-gray-500 mb-2">{today}</p>
                        <h1 className="text-5xl font-serif font-bold text-primary">
                            {todayBible.bookName} {todayBible.chapterOrdinal}장
                        </h1>
                    </div>

                    <div className="pl-1 pr-4 pt-8 pb-20 space-y-20">
                        {todayBible.verses.map((verse) => (
                            <div
                                key={verse.ordinal}
                                className="flex items-start justify-stretch gap-3">
                                <div className="text-xl font-bold text-primary/60">
                                    {verse.ordinal}
                                </div>
                                <p className="text-xl text-gray-700">{verse.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 bg-gray-50/50 rounded-b-2xl flex justify-center">
                        <Button variant="primary" size="lg" className="shadow-lg shadow-primary/30">
                            <LuBookOpenCheck className="inline mr-3" size={22} />
                            오늘의 말씀 읽음
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
