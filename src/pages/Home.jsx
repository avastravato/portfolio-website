import { ThemeToggle } from "../components/ThemeToggle";
import { MainPage } from "../components/MainPage";
import { Drag } from '../components/Drag';

export const Home = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Background effects */}

            {/* Main content */}
            <MainPage />
            <Drag />
            {/* Footer */}

        </div>
    );
};