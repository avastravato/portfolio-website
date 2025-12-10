import { ThemeToggle } from "../components/ThemeToggle";
import { PopUp } from "../components/PopUp";
import { MainPage } from "../components/MainPage";

export const Home = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            <ThemeToggle />
            <PopUp />
            {/* Background effects */}

            {/* Main content */}
            <MainPage />
            {/* Footer */}

        </div>
    );
};