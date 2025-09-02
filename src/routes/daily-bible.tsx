import { createFileRoute } from "@tanstack/react-router";
import { Card, Button } from "../_design_system";
import React from "react";
import { LuBookOpenCheck } from "react-icons/lu";

// 나중에 백엔드 API에서 가져올 데이터의 타입을 정의합니다.
interface BibleVerse {
    number: number;
    text: string;
}

interface TodayBible {
    book: string;
    chapter: number;
    verses: BibleVerse[];
}

// API가 구현되기 전까지 사용할 모킹 데이터입니다.
const mockVerses: TodayBible = {
    book: "창세기",
    chapter: 1,
    verses: [
        {
            number: 1,
            text: "태초에 하나님이 천지를 창조하시니라",
        },
        {
            number: 2,
            text: "땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 영은 수면 위에 운행하시니라",
        },
        {
            number: 3,
            text: "하나님이 이르시되 빛이 있으라 하시니 빛이 있었고",
        },
        {
            number: 4,
            text: "빛이 하나님이 보시기에 좋았더라 하나님이 빛과 어둠을 나누사",
        },
        {
            number: 5,
            text: "하나님이 빛을 낮이라 부르시고 어둠을 밤이라 부르시니라 저녁이 되고 아침이 되니 이는 첫째 날이니라",
        },
    ],
};

export const Route = createFileRoute("/daily-bible")({
    component: DailyBiblePage,
});

function DailyBiblePage() {
    const [todayBible] = React.useState<TodayBible>(mockVerses);

    const today = new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto p-4 max-w-3xl">
                <Card className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-0">
                    <div className="text-center p-8 border-b border-gray-200">
                        <p className="text-base text-gray-500 mb-2">{today}</p>
                        <h1 className="text-5xl font-serif font-bold text-primary">
                            {todayBible.book} {todayBible.chapter}장
                        </h1>
                    </div>

                    <div className="px-8 pt-8 pb-20 space-y-30">
                        {todayBible.verses.map((verse) => (
                            <div key={verse.number} className="flex items-start gap-5">
                                <div className="text-xl font-bold text-primary/60 pt-1">
                                    {verse.number}
                                </div>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    {verse.text}
                                </p>
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
