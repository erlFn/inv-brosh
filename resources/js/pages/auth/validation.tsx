import { Head, router } from "@inertiajs/react";
import { Send } from 'lucide-react';

import { Loading } from "@/components/loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoading } from "@/hooks/use-loading";
import user from "@/routes/user";


export default function Validation() {
    const { isLoading, setIsLoading } = useLoading();

    const handleValidate = () => {
        router.visit(user.dashboard.url(), {
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
            {isLoading && <Loading/> }
            <div className="min-h-screen w-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center justify-center gap-2">
                        <p>Employee ID:</p>
                        <Badge>
                            XXXX-XX-XX-XX
                        </Badge>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Input
                            placeholder="Verification Token"
                            className="focus-visible:ring-0 focus-visible:border-blue-400/40"
                        />
                        <Button
                            size="icon"
                            disabled={isLoading}
                            onClick={handleValidate}
                        >
                            <Send/>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}