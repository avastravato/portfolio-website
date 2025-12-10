import { Smile, Folders, Hammer, FileText, Palette, MailOpen } from 'lucide-react';

export const MainFrame = () => {
    return (
        <div className='w-[50vw] aspect-[3/2] bg-card rounded-xl outline-4 outline-border'>
            <div className='w-full h-20 bg-card-header rounded-t-xl flex items-center p-4 outline-4 outline-border'>
                <p className='font-[Fira_Code] text-2xl text-white'>Users/avastravato/portfolio</p>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 '>
                <button><Smile />About</button>
                <button><Folders />Work</button>
                <button><Hammer />Tools</button>
                <button><FileText />Resume</button>
                <button><Palette />Hobbies</button>
                <button><MailOpen />Contact</button>
            </div>
        </div>
    );
};