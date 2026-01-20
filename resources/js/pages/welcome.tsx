import { Head, router } from '@inertiajs/react';
import { House } from 'lucide-react';

import { Loading } from '@/components/loading';
import { Button } from '@/components/ui/button';
import { useLoading } from '@/hooks/use-loading';
import auth from '@/routes/auth';

export default function Welcome() {
    const { isLoading, setIsLoading } = useLoading();

    const handleRedirect = () => {
        router.visit(auth.verification.url(), {
            onStart: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            }
        });
    };

    return (
        <>
            <Head
                title='Test Welcome'
            />
            { isLoading && <Loading/> }
            <div className='min-h-screen w-full flex items-center justify-center'>
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex items-center justify-center flex-col'>
                        <p className='capitalize'>
                            welcome test page
                        </p>
                        <p className='text-muted-foreground italic'>
                            description
                        </p>
                    </div>
                    <Button
                        size="icon"
                        disabled={isLoading}
                        onClick={handleRedirect}
                    >
                        <House
                            absoluteStrokeWidth
                        />
                    </Button>
                </div>
            </div>
        </>
    );
}
