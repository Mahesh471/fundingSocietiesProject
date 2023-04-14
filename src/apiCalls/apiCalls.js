
//Login Screen
export const fetchToken = async (email, password) => {
    const resObj = await fetch('https://reqres.in/api/login',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    });
    return resObj.json();
}

//Register Screen
export const fetchIdAndToken = async (email, password) => {
    const resObj = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    });
    return resObj.json();
}

//Portfolio Screen
export const fetchItems = async () => {
    const res = await fetch('https://mocki.io/v1/11684c46-2cf8-4e85-b920-35a8e5458a66');
    return res.json();
}