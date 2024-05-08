'use server'
import { revalidatePath } from "next/cache";
import { User } from "@/utils/entity";
import { create } from "@/utils/lib";

export async function submit(previousState:any, form: FormData) {
    'use server'

    // extract data from form
    const email = form.get('email') as string
    const password = form.get('password') as string
    const passwordConfirm = form.get('passwordConfirm') as string
    const firstName = form.get('firstName') as string
    const lastName = form.get('lastName') as string
    const country = form.get('country') as string
    const phoneNumber = form.get('phoneNumber') as string
    const ceaNumber = form.get('ceaNumber') as string | null
    const agency = form.get('agency') as string | null
    const license = form.get('license') as string | null

    const userObj = {
        email,
        password,
        passwordConfirm,
        firstName,
        lastName,
        country,
        phoneNumber,
        ceaNumber,
        agency,
        license,
    }
    

    // call user object
    const {success, message} = await create(userObj)


    revalidatePath('/admin')
    return {success,message}

}