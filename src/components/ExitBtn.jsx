import { X } from 'lucide-react';

export const ExitBtn = () => {
    return (
        <div>
            <dialog open className='mx-auto animate-fade-in bg-primary w-150 h-75'>
                <form method="dialog">
                    <div className='bg-purple-200 w-150 p-1 flex justify-end'>
                        <div className='w-8 h-8 p-1 bg-purple-50'>
                            <div>
                                <button><X /></button>
                            </div>
                        </div>
                    </div>
                </form>
                <div>
                    <p className='text-foreground text-xl'>Hello, world</p>
                </div>
            </dialog>
        </div>
    );
};