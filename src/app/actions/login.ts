"use server"

import { signIn } from 'auth'


export async function loginAction(prevState: any, formData: FormData)
{
    try {
        await signIn("credentials", {
            redirectTo: '/protected',
            username: formData.get("email") as string,
            password: formData.get("password") as string,
        })
    }
    catch (e) {

        const detail = e instanceof Error ? `${e.name} :: ${e.message}` : `Unknown`

        return { error: true, title: 'Login failed', detail }
    }

    return null
}