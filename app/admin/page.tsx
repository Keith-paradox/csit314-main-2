import { redirect } from "next/navigation"

export default function Page() {
    redirect('/admin/useraccount')

    return (
        <div>
            Redirect Page
        </div>
    )
}