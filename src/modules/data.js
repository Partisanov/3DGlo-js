const data = (url) => {

    const getData = (url) => {
        return fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then(response => response.json());
    };

    getData(url)
        .then(data => sendData(data));

};

export default data;