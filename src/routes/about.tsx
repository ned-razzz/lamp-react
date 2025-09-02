import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { Card, HorizontalImageCard } from "../_design_system";
import { LuUsers, LuBookOpen } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const Route = createFileRoute("/about")({
    component: AboutPage,
});

function AboutPage() {
    return (
        <React.Fragment>
            <div className="bg-background mx-auto px-4 py-8 font-sans">
                <VisionSection className="mb-40" />
                <MemberSection className="mb-40" />
                <HistorySection className="mb-20" />
            </div>
        </React.Fragment>
    );
}

const SectionHeader = ({
    children = null,
    title,
}: {
    children?: React.ReactNode;
    title: string;
}) => {
    return (
        <header className="mb-12">
            <h2 className="mb-2 text-3xl md:text-4xl font-bold text-center">{title}</h2>
            <div className="mx-auto mb-6 w-20 h-1 bg-accent"></div>
            {children}
        </header>
    );
};

interface IVision {
    title: string;
    description: string;
    icon: IconType;
}

const VisionSection = ({ className }: { className?: string }) => {
    const visionContents: IVision[] = [
        {
            title: "Worship-Centered",
            description:
                "We aim for a life transformed by the power of the Word and experiencing grace through worship offered to God.",
            icon: FaRegHeart,
        },
        {
            title: "Community Growth",
            description:
                "We pursue a healthy church community that grows together by loving and serving one another.",
            icon: LuUsers,
        },
        {
            title: "Practicing the Word",
            description:
                "We live the life of a disciple who learns the truth of the gospel, practices it in life, and serves the world.",
            icon: LuBookOpen,
        },
    ];

    return (
        <section className={className}>
            <SectionHeader title="Vision">
                <h3 className="text-base md:text-lg font-semibold mb-4 text-center">
                    Matthew 28:19-20
                </h3>
                <p className="px-4 md:px-8 text-gray-800 text-center text-sm md:text-base italic break-keep">
                    &quot;Therefore go and make disciples of all nations, baptizing them in the name
                    of the Father and of the Son and of the Holy Spirit, and teaching them to obey
                    everything I have commanded you. And surely I am with you always, to the very
                    end of the age.&quot;
                </p>
            </SectionHeader>

            <div className="flex flex-col gap-8">
                {visionContents.map((vision, index) => {
                    return <VisionCard key={index} vision={vision}></VisionCard>;
                })}
            </div>
        </section>
    );
};

const VisionCard = ({ vision }: { vision: IVision }) => {
    return (
        <Card>
            <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary text-white">
                    <vision.icon size={32} />
                </div>
            </div>
            <h3 className="py-2 text-lg md:text-xl font-semibold text-center">{vision.title}</h3>
            <p className="text-gray-700 text-center text-sm md:text-base">{vision.description}</p>
        </Card>
    );
};

const MemberSection = ({ className }: { className?: string }) => {
    return (
        <section className={className}>
            <SectionHeader title="Members" />
            <div className="flex flex-col gap-4">
                <HorizontalImageCard
                    imageUrl="https://picsum.photos/400/400?random=pastor1"
                    title="Pastor John Doe"
                    description="Pastor John Doe has been leading our church since its founding in 2022."
                />
                <HorizontalImageCard
                    imageUrl="https://picsum.photos/400/400?random=pastor2"
                    title="Deacon Jane Smith"
                    description="Jane Smith serves as a deacon, focusing on community outreach and support."
                />
                <HorizontalImageCard
                    imageUrl="https://picsum.photos/400/400?random=pastor3"
                    title="Youth Pastor Mike Johnson"
                    description="Mike Johnson leads our youth group with energy and a passion for the next generation."
                />
            </div>
        </section>
    );
};

interface ITimelineEvent {
    title: string; // Year
    cardTitle: string;
}

const VerticalTimeline = ({ events }: { events: ITimelineEvent[] }) => {
    return (
        <div className="relative border-l-2 border-gray-200 ml-6 pt-4 pb-1">
            {events.map((event, index) => (
                <div key={index} className="relative mb-20 pl-8">
                    <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-white"></div>
                    <span className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                        {event.title}
                    </span>
                    <h3 className="text-lg font-semibold text-primary mt-1">{event.cardTitle}</h3>
                </div>
            ))}
        </div>
    );
};

const HistorySection = ({ className }: { className?: string }) => {
    const historyEvents: ITimelineEvent[] = [
        {
            title: "2016",
            cardTitle: "Bible Study Started at Myongji University",
        },
        {
            title: "2020",
            cardTitle: "Worship Space Expanded",
        },
        {
            title: "2022",
            cardTitle: "Yongin Hambak Church Established",
        },
        {
            title: "2024",
            cardTitle: "Joint Retreat with UBF",
        },
    ];

    return (
        <section className={className}>
            <div className="container mx-auto px-4 max-w-4xl">
                <SectionHeader title="History">
                    <p className="px-4 md:px-8 text-center text-gray-600 text-sm md:text-base">
                        This is the path our church has walked under God's guidance. We remember His
                        faithfulness through our past history and move forward into the future.
                    </p>
                </SectionHeader>
                <VerticalTimeline events={historyEvents} />
            </div>
        </section>
    );
};
