import { ThemeToggle } from "../components/ThemeToggle";
import { MainPage } from "../components/MainPage";

export const Home = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Background effects */}

            {/* Main content */}
            <MainPage />
            
            {/* Footer */}

        </div>
    );
};