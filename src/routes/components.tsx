import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import {
    Alert,
    Badge,
    Button,
    Card,
    Carousel,
    Checkbox,
    Footer,
    Hero,
    HorizontalImageCard,
    ImageCard,
    Input,
    Navigation,
    SearchInput,
    TextOverlayImageCard,
} from "../_design_system";

export const Route = createFileRoute("/components")({
    component: Components,
});

function Components() {
    const [isChecked, setIsChecked] = React.useState(false);
    return (
        <React.Fragment>
            <Navigation
                links={[
                    { name: "Home", href: "#" },
                    { name: "About", href: "#" },
                    { name: "Services", href: "#" },
                    { name: "Contact", href: "#" },
                ]}
            />

            <Hero
                title="Welcome to Our Design System"
                subtitle="A comprehensive guide to our UI components and design principles."
                ctaText="Get Started"
                ctaLink="#"
            />

            <div className="bg-background mx-auto px-4 p-8 font-sans">
                <div className="mb-12 p-6 bg-sub rounded-lg">
                    <h2 className="text-2xl font-bold text-primary mb-4">Theme</h2>
                    <p>
                        The design system is built upon a simple and clean theme. It uses a minimal
                        color palette and modern typography to create a user-friendly experience.
                        The core theme colors are Primary, Sub, Background, and Accent.
                    </p>
                </div>

                {/* Color Palette */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Color Palette</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-primary"></div>
                            <p className="mt-2 font-bold">Primary</p>
                            <p>#282828</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-sub"></div>
                            <p className="mt-2 font-bold">Sub</p>
                            <p>#F4F4F4</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-background"></div>
                            <p className="mt-2 font-bold">Background</p>
                            <p>#FFFFFF</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-accent"></div>
                            <p className="mt-2 font-bold">Accent</p>
                            <p>#F98866</p>
                        </div>
                    </div>
                </div>

                {/* Typography */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Typography</h2>
                    <h1 className="text-4xl font-bold mb-4">Heading 1</h1>
                    <h2 className="text-3xl font-bold mb-4">Heading 2</h2>
                    <h3 className="text-2xl font-bold mb-4">Heading 3</h3>
                    <p className="text-base leading-relaxed">
                        This is a paragraph of body text. It uses the Noto Sans KR and Nanum Gothic
                        fonts for readability. The line height is set to be comfortable for reading.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Buttons</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button variant="primary" size="sm">
                            Small
                        </Button>
                        <Button variant="primary">Medium</Button>
                        <Button variant="primary" size="lg">
                            Large
                        </Button>
                        <Button variant="secondary" size="sm">
                            Small
                        </Button>
                        <Button variant="secondary">Medium</Button>
                        <Button variant="secondary" size="lg">
                            Large
                        </Button>
                        <Button variant="disabled" disabled>
                            Disabled Button
                        </Button>
                    </div>
                </div>

                {/* Inputs */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Input Fields</h2>
                    <div className="max-w-sm space-y-6">
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-1 block">
                                Form Field
                            </label>
                            <Input placeholder="Enter your name" />
                        </div>
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-1 block">
                                Search Field
                            </label>
                            <SearchInput placeholder="Search..." />
                        </div>
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-1 block">
                                Checkbox
                            </label>
                            <Checkbox
                                label="Accept terms and conditions"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Standard Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <h3 className="text-xl font-bold mb-2">Card Title</h3>
                            <p>
                                This is a simple card component. It has a light shadow and rounded
                                corners.
                            </p>
                        </Card>

                        <Card>
                            <h3 className="text-xl font-bold mb-2">Another Card</h3>
                            <p>You can put any content you want inside these cards.</p>
                            <Button variant="primary" size="sm" className="mt-4">
                                Learn More
                            </Button>
                        </Card>
                    </div>
                </div>

                {/* Image Cards */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Image Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        <ImageCard
                            imageUrl="https://picsum.photos/400/300?random=1"
                            title="Standard Image Card"
                            description="This card features an image at the top."
                        />
                        <ImageCard
                            imageUrl="https://picsum.photos/400/300?random=2"
                            title="Card with Action"
                            description="This image card includes a button.">
                            <Button variant="primary" size="sm">
                                Read More
                            </Button>
                        </ImageCard>
                        <TextOverlayImageCard
                            imageUrl="https://picsum.photos/400/300?random=3"
                            title="Text Overlay"
                            description="The text is overlaid on the image."
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <HorizontalImageCard
                            imageUrl="https://picsum.photos/400/300?random=4"
                            title="Horizontal Card"
                            description="An image on the side of the content, great for articles or listings."
                        />
                        <HorizontalImageCard
                            imageUrl="https://picsum.photos/400/300?random=5"
                            title="Another Horizontal"
                            description="This layout is responsive and stacks on smaller screens."
                        />
                    </div>
                </div>

                {/* Carousel */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Carousel</h2>
                    <Carousel
                        items={[
                            <div className="w-full h-64 bg-primary flex items-center justify-center text-white text-2xl">
                                Slide 1
                            </div>,
                            <div className="w-full h-64 bg-accent flex items-center justify-center text-white text-2xl">
                                Slide 2
                            </div>,
                            <div className="w-full h-64 bg-sub flex items-center justify-center text-primary text-2xl">
                                Slide 3
                            </div>,
                        ]}
                    />
                </div>

                {/* Alerts */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Alerts</h2>
                    <div className="space-y-4">
                        <Alert variant="success">This is a success message.</Alert>
                        <Alert variant="warning">This is a warning message.</Alert>
                        <Alert variant="error">This is an error message.</Alert>
                    </div>
                </div>

                {/* Badges */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Badges</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Badge variant="primary">Primary</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="success">Success</Badge>
                        <Badge variant="warning">Warning</Badge>
                        <Badge variant="error">Error</Badge>
                    </div>
                </div>

                {/* Layout */}
                <div>
                    <h2 className="text-2xl font-bold text-primary mb-6">Layout</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Flexbox</h3>
                            <div className="flex flex-wrap gap-4 p-4 bg-sub rounded-lg">
                                <div className="bg-primary text-white p-4 rounded-lg">
                                    Flex Item 1
                                </div>
                                <div className="bg-primary text-white p-4 rounded-lg">
                                    Flex Item 2
                                </div>
                                <div className="bg-primary text-white p-4 rounded-lg">
                                    Flex Item 3
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Grid</h3>
                            <div className="grid grid-cols-3 gap-4 p-4 bg-sub rounded-lg">
                                <div className="bg-accent text-white p-4 rounded-lg">
                                    Grid Item 1
                                </div>
                                <div className="bg-accent text-white p-4 rounded-lg">
                                    Grid Item 2
                                </div>
                                <div className="bg-accent text-white p-4 rounded-lg">
                                    Grid Item 3
                                </div>
                                <div className="bg-accent text-white p-4 rounded-lg col-span-2">
                                    Grid Item 4 (span 2)
                                </div>
                                <div className="bg-accent text-white p-4 rounded-lg">
                                    Grid Item 5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer
                    copyright="© 2023 Your Company. All rights reserved."
                    socialLinks={[
                        { name: "Facebook", href: "#" },
                        { name: "Twitter", href: "#" },
                        { name: "LinkedIn", href: "#" },
                    ]}
                />
            </div>
        </React.Fragment>
    );
}
