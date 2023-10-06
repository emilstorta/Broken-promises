module.exports = {

myPromise: function(resource) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`, {})
        .then((res)=> res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    }); 
}

};
