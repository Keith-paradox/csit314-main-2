import Navigation from "@/components/nav";
import { redirect } from "next/navigation";


export default function Page() {
    redirect('/account/personal')
    return(
        <div>
            hi
        </div>
    )
}