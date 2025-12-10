import { X } from 'lucide-react';

export const PopUp = () => {
    return (
        <div className='rounded-lg'>
            <dialog open className='mx-auto animate-fade-in bg-card w-150 h-75'>
                <form method="dialog">
                    <div className='bg-card-header w-150 p-1 flex justify-end'>
                        <div className='w-8 h-8 p-1'>
                            <div>
                                <button><X className='text-primary-foreground'/></button>
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