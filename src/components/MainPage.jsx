import { Smile, Folders, Hammer, FileText, Palette, MailOpen } from 'lucide-react';
import { Drag } from '../components/Drag';
import { useState } from 'react';

export const MainPage = () => {
    const [about, setAbout] = useState(false);
    return (
        <div className='w-[50vw] aspect-[3/2] bg-card rounded-xl outline-4 outline-border'>
            <div className='w-full h-20 bg-card-header rounded-t-xl flex items-center p-4 outline-4 outline-border'>
                <p className='font-[Fira_Code] text-2xl text-white'>Users/avastravato/portfolio</p>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 '>
                <div>
                    <button onClick={() => {setAbout(true)}}><Smile />About</button>
                    { about && <Drag /> }
                </div>
                <button><Folders />Work</button>
                <button><Hammer />Tools</button>
                <button><FileText />Resume</button>
                <button><Palette />Hobbies</button>
                <button><MailOpen />Contact</button>
            </div>
        </div>
    );
};