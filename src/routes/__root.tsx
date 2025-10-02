import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Footer, Navigation } from "../_design_system";

export const Route = createRootRoute({
    component: () => (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="relative w-[500px] bg-white">
                <Navigation
                    className="sticky top-0 z-100"
                    links={[
                        { name: "Home", href: "#home" },
                        { name: "About Us", href: "#about" },
                        { name: "Sermons", href: "#sermons" },
                        { name: "Events", href: "#events" },
                        { name: "Contact", href: "#contact" },
                    ]}
                />
                <div className="">
                    <Outlet />
                </div>
                <Footer
                    copyright="© 2025 Yongin Hambak Church. All rights reserved."
                    socialLinks={[
                        { name: "Facebook", href: "#" },
                        { name: "Twitter", href: "#" },
                        { name: "Instagram", href: "#" },
                    ]}
                />
            </div>
        </div>
    ),
});
