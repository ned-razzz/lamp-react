import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { Hero, Card, ImageCard, Button, Footer } from "../_design_system";

export const Route = createFileRoute("/")({
    component: ChurchLandingPage,
});

function ChurchLandingPage() {
    return (
        <React.Fragment>
            <Hero
                title="Welcome to Our Church"
                subtitle="A place of worship, community, and spiritual growth."
                ctaText="Join Us This Sunday"
                ctaLink="#events"
                backgroundImage="https://picsum.photos/1600/900?random=church"
            />

            <div className="bg-background min-h-screen max-w-5xl mx-auto px-4 p-8 font-sans">
                {/* About Us Section */}
                <section id="about" className="my-40">
                    <h2 className="text-4xl font-bold text-primary mb-6 text-center pb-2">
                        About Our Church
                    </h2>
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                        <p className="text-lg leading-relaxed text-center">
                            Our church is a vibrant community dedicated to spreading love, hope, and
                            faith. We believe in fostering a welcoming environment where everyone
                            can grow in their spiritual journey. Join us as we explore the teachings
                            of Christ and serve our local community.
                        </p>
                    </Card>
                </section>

                {/* Sermons Section */}
                <section id="sermons" className="my-40">
                    <h2 className="text-4xl font-bold text-primary mb-6 text-center pb-2">
                        Recent Sermons
                    </h2>
                    <div className="flex flex-col items-stretch gap-4 p-4">
                        <ImageCard
                            className="hover:shadow-xl transition-shadow duration-300"
                            imageUrl="https://picsum.photos/400/300?random=6"
                            title="Love Thy Neighbor"
                            description="A powerful message on compassion and community.">
                            <Button variant="primary" size="sm">
                                Listen Now
                            </Button>
                        </ImageCard>
                        <ImageCard
                            className="hover:shadow-xl transition-shadow duration-300"
                            imageUrl="https://picsum.photos/400/300?random=7"
                            title="Faith in Action"
                            description="Exploring how faith can inspire positive change.">
                            <Button variant="primary" size="sm">
                                Listen Now
                            </Button>
                        </ImageCard>
                        <ImageCard
                            className="hover:shadow-xl transition-shadow duration-300"
                            imageUrl="https://picsum.photos/400/300?random=8"
                            title="The Path to Peace"
                            description="Finding inner peace through spiritual guidance.">
                            <Button variant="primary" size="sm">
                                Listen Now
                            </Button>
                        </ImageCard>
                    </div>
                </section>

                {/* Events Section */}
                <section id="events" className="my-40">
                    <h2 className="text-4xl font-bold text-primary mb-6 text-center pb-2">
                        Upcoming Events
                    </h2>
                    <div className="flex flex-wrap content-stretch gap-8">
                        <Card className="hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold mb-2">Sunday Service</h3>
                            <p className="text-lg mb-2">Every Sunday at 10:00 AM</p>
                            <p>
                                Join us for our weekly worship service, filled with inspiring music
                                and a heartfelt message.
                            </p>
                            <Button variant="secondary" size="sm" className="mt-4">
                                Learn More
                            </Button>
                        </Card>
                        <Card className="hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold mb-2">Community Outreach</h3>
                            <p className="text-lg mb-2">Saturday, October 15th, 9:00 AM</p>
                            <p>
                                Volunteer with us as we serve our community through various outreach
                                programs.
                            </p>
                            <Button variant="secondary" size="sm" className="mt-4">
                                Sign Up
                            </Button>
                        </Card>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="my-40 text-center">
                    <h2 className="text-4xl font-bold text-primary mb-6 pb-2">Contact Us</h2>
                    <p className="text-lg mb-4">
                        Have questions or want to learn more? Reach out to us!
                    </p>
                    <p className="text-lg mb-2">123 Church Road, City, State 12345</p>
                    <p className="text-lg mb-2">Phone: (123) 456-7890</p>
                    <p className="text-lg mb-4">Email: info@ourchurch.org</p>
                    <Button variant="primary" size="lg">
                        Get Directions
                    </Button>
                </section>
            </div>

            <Footer
                copyright="© 2025 Yongin Hambak Church. All rights reserved."
                socialLinks={[
                    { name: "Facebook", href: "#" },
                    { name: "Twitter", href: "#" },
                    { name: "Instagram", href: "#" },
                ]}
            />
        </React.Fragment>
    );
}
