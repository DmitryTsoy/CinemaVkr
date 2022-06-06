export default async function loginFetch(email: string, pass: string) {

    const req = await fetch(`http://localhost/Cinema/hs/v1/logIn`,
        {
            method: 'POST',
            body:
                JSON.stringify({
                    "email": email,
                    "pass": pass
                })
        });
    return req

}