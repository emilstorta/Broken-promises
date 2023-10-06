function myPromise () {
    new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos', {})
        .then((res)=> res.json())
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log('CATCH', err);
        });
    }); 
}

myPromise();