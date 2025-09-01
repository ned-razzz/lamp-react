import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/components")({
    component: Components,
});

// Define Prop Types
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "disabled";
    children: React.ReactNode;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface CardProps {
    children: React.ReactNode;
}

interface AlertProps {
    variant: "success" | "warning" | "error";
    children: React.ReactNode;
}

// Reusable Button Component
const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
    const baseClasses = "px-6 py-2 rounded-full font-bold transition-colors";
    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90",
        secondary: "bg-sub text-primary hover:bg-opacity-90",
        disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
    };
    return (
        <button className={`${baseClasses} ${variants[variant]}`} {...props}>
            {children}
        </button>
    );
};

// Reusable Input Component
const Input: React.FC<InputProps> = ({ ...props }) => {
    return (
        <input
            className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-primary transition-colors"
            {...props}
        />
    );
};

// Reusable Card Component
const Card: React.FC<CardProps> = ({ children }) => {
    return <div className="bg-background rounded-lg shadow-lg p-6">{children}</div>;
};

// Reusable Alert Component
const Alert: React.FC<AlertProps> = ({ variant, children }) => {
    const variants = {
        success: "bg-success/20 text-green-800",
        warning: "bg-warning/20 text-yellow-800",
        error: "bg-error/20 text-red-800",
    };
    return <div className={`p-4 rounded-lg ${variants[variant]}`}>{children}</div>;
};

function Components() {
    return (
        <div className="bg-background min-h-screen p-8 font-sans">
            <h1 className="text-4xl font-bold text-primary mb-12">Component Library</h1>

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
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="disabled" disabled>
                        Disabled Button
                    </Button>
                </div>
            </div>

            {/* Inputs */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6">Input Fields</h2>
                <div className="max-w-sm">
                    <Input placeholder="Enter your name" />
                </div>
            </div>

            {/* Cards */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6">Cards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card>
                        <h3 className="text-xl font-bold mb-2">Card Title</h3>
                        <p>
                            This is a simple card component. It has a light shadow and rounded
                            corners.
                        </p>
                    </Card>
                </div>
            </div>

            {/* Alerts */}
            <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Alerts</h2>
                <div className="space-y-4">
                    <Alert variant="success">This is a success message.</Alert>
                    <Alert variant="warning">This is a warning message.</Alert>
                    <Alert variant="error">This is an error message.</Alert>
                </div>
            </div>
        </div>
    );
}
