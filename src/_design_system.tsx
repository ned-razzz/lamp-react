import React from "react";
import { FaChurch } from "react-icons/fa6";

// Define Prop Types
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "disabled";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { className?: string };

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

interface AlertProps {
    variant: "success" | "warning" | "error";
    children: React.ReactNode;
    className?: string;
}

interface BadgeProps {
    variant: "primary" | "secondary" | "success" | "warning" | "error";
    children: React.ReactNode;
    className?: string;
}

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

interface ImageCardProps {
    imageUrl: string;
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}

interface TextOverlayImageCardProps {
    imageUrl: string;
    title: string;
    description: string;
    className?: string;
}

interface HorizontalImageCardProps {
    imageUrl: string;
    title: string;
    description: string;
    className?: string;
}

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage?: string;
    className?: string;
}

interface NavigationProps {
    links: { name: string; href: string }[];
    className?: string;
}

interface FooterProps {
    copyright: string;
    socialLinks: { name: string; href: string }[];
    className?: string;
}

// Reusable Button Component
export const Button: React.FC<ButtonProps> = ({
    variant,
    size = "md",
    children,
    className,
    ...props
}) => {
    const baseClasses = "rounded-full font-bold transition-all duration-200 ease-in-out";
    const sizes = {
        sm: "px-4 py-1 text-sm",
        md: "px-6 py-2",
        lg: "px-8 py-3 text-lg",
    };
    const variants = {
        primary: "bg-primary text-white hover:brightness-[1.5] active:brightness-[2.2]",
        secondary: "bg-sub text-primary hover:brightness-90 active:brightness-75",
        disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
    };
    return (
        <button
            className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className || ""}`}
            {...props}>
            {children}
        </button>
    );
};

// Reusable Input Component
export const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return (
        <input
            className={`w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-primary transition-colors ${className || ""}`}
            {...props}
        />
    );
};

// Reusable Card Component
export const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`bg-background rounded-lg shadow-lg p-6 ${className || ""}`}>
            {children}
        </div>
    );
};

// Reusable Alert Component
export const Alert: React.FC<AlertProps> = ({ variant, children, className }) => {
    const variants = {
        success: "bg-green-500/20 text-green-800",
        warning: "bg-yellow-500/20 text-yellow-800",
        error: "bg-red-500/20 text-red-800",
    };
    return (
        <div className={`p-4 rounded-lg ${variants[variant]} ${className || ""}`}>{children}</div>
    );
};

export const ImageCard: React.FC<ImageCardProps> = ({
    imageUrl,
    title,
    description,
    children,
    className,
}) => {
    return (
        <div className={`bg-background rounded-lg shadow-lg overflow-hidden ${className || ""}`}>
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>{description}</p>
                {children && <div className="mt-4">{children}</div>}
            </div>
        </div>
    );
};

export const TextOverlayImageCard: React.FC<TextOverlayImageCardProps> = ({
    imageUrl,
    title,
    description,
    className,
}) => {
    return (
        <div className={`relative rounded-lg shadow-lg overflow-hidden ${className || ""}`}>
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-200">{description}</p>
            </div>
        </div>
    );
};

export const HorizontalImageCard: React.FC<HorizontalImageCardProps> = ({
    imageUrl,
    title,
    description,
    className,
}) => {
    return (
        <div
            className={`bg-background rounded-lg shadow-lg overflow-hidden flex md:flex-row flex-col ${className || ""}`}>
            <img
                src={imageUrl}
                alt={title}
                className="w-full md:w-1/3 h-48 md:h-auto object-cover"
            />
            <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    ctaText,
    ctaLink,
    backgroundImage,
    className,
}) => {
    return (
        <div
            className={`relative h-[80vh] flex items-center justify-center text-center overflow-hidden shadow-lg ${className || ""}`}>
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center filter brightness-75"
                    style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            )}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white py-20 px-4 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl mb-8">{subtitle}</p>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => (window.location.href = ctaLink)}>
                    {ctaText}
                </Button>
            </div>
        </div>
    );
};

const ChurchLogo: React.FC = () => {
    return (
        <div className="flex justify-center">
            <a href="/" className="flex justify-normal items-center gap-2">
                <FaChurch size={30} />
                <h1 className="font-bold text-2xl">용인 함박 교회</h1>
            </a>
        </div>
    );
};

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navLinks = [
        { name: "소개", href: "/about" },
        { name: "오늘의 말씀", href: "/daily-bible" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`bg-sub text-primary py-4 shadow-lg ${className || ""}`}>
            <div className="flex justify-between items-center px-4">
                {/* Logo */}
                <div className="flex flex-row justify-center items-center gap-2">
                    <ChurchLogo />
                </div>

                {/* Hamburger Icon */}
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-sub shadow-lg py-2 z-50 flex flex-col items-center space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-4 py-2 text-primary hover:text-white transition-colors duration-200"
                            onClick={toggleMenu} // Close menu on link click
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export const Footer: React.FC<FooterProps> = ({ copyright, socialLinks, className }) => {
    return (
        <footer
            className={`bg-primary text-white p-8 mt-12 shadow-lg text-center ${className || ""}`}>
            <p className="mb-4">{copyright}</p>
            <div className="flex justify-center space-x-6">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="hover:text-accent transition-colors duration-200">
                        {link.name}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export const Carousel: React.FC<{ items: React.ReactNode[]; className?: string }> = ({
    items,
    className,
}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={`relative w-full max-w-2xl mx-auto ${className || ""}`}>
            <div className="overflow-hidden relative h-64 rounded-lg">
                <div
                    className="flex transition-transform ease-in-out duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {items.map((item, index) => (
                        <div className="w-full flex-shrink-0" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                &#10094;
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                &#10095;
            </button>
        </div>
    );
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, className }) => {
    return (
        <label className={`flex items-center space-x-2 cursor-pointer ${className || ""}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="form-checkbox h-5 w-5 text-primary rounded focus:ring-primary"
            />
            <span className="text-primary">{label}</span>
        </label>
    );
};

export const SearchInput: React.FC<InputProps> = ({ className, ...props }) => {
    return (
        <div className={`relative ${className || ""}`}>
            <Input {...props} />
            <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
};

export const Badge: React.FC<BadgeProps> = ({ variant, children, className }) => {
    const variants = {
        primary: "bg-primary text-white",
        secondary: "bg-sub text-primary",
        success: "bg-green-500 text-white",
        warning: "bg-yellow-500 text-white",
        error: "bg-red-500 text-white",
    };
    return (
        <span
            className={`px-2 py-1 text-xs font-bold rounded-full ${variants[variant]} ${className || ""}`}>
            {children}
        </span>
    );
};
