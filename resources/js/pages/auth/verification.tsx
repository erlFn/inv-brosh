import { Head, router } from "@inertiajs/react";
import { ChevronLeft, Send } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoading } from "@/hooks/use-loading";
import { home } from "@/routes";
import auth from "@/routes/auth";


export default function Verification() {
    const { isLoading, setIsLoading } = useLoading();

    const handleBack = () => {
        router.visit(home.url(), {
            onStart: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            }
        });
    };

    const handleVerify = () => {
        router.visit(auth.validation.url(), {
            onStart: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            }
        });
    }

    return(
        <>
            <Head
                title="Verfication"
            />
            <div className="min-h-screen w-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center justify-center`">
                        <p>Employee ID</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            size="icon"
                            disabled={isLoading}
                            onClick={handleBack}
                        >
                            <ChevronLeft
                                absoluteStrokeWidth
                            />
                        </Button>
                        <Input
                            className="focus-visible:ring-0 focus-visible:border-blue-400/40"
                        />
                    </div>
                    <Button
                        size="icon"
                        disabled={isLoading}
                        onClick={handleVerify}
                        className="w-full"
                    >
                        <Send/>
                    </Button>
                </div>
            </div>
        </>
    );
}