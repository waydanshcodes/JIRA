import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Car } from "lucide-react"
import { DottedSeparator } from "@/components/dotted-seperator"

export const SignInCard = () => {
    return (
        <Card className="w-full h-full md:w--[478px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome Back!
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator /> 
                {/* 1:06:51 */}
            </div>
        </Card>
    )
}