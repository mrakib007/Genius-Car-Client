export const setAuthToken = (user) =>{
    const currentUser = {
        email: user.email
    }

    fetch('https://genius-car-server-five-amber.vercel.app/jwt',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        //Local storage is not the best place to store jwt token
        //but it is the easiest way possible
        localStorage.setItem('geniusToken',data.token);
        // navigate(from,{replace: true});
    });
        
}