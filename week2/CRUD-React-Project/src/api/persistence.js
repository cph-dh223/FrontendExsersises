export function fetchData(url, callback) {

    const headers =
    {
        'Accept': 'application/json',
    }

    const options = {
        headers
    }

    fetch(url, options)
        .then(res => res.json())
        .then(data => callback(data))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            } else {
                console.log("Network error");
            }
        })
}
export function putData(url, body){
    changeData(url, 'PUT', body)
}
export function putData(url, body){
    changeData(url, 'POST', body)
}
function changeData(url, method, body) {

    const headers =
    {
        'Accept': 'application/json',
        'Content-Type':'application/json'
    }

    if (!method === 'POST' && !method === 'PUT') {
        console.log('not post or put')
        return
    }

    const options = {
        method,
        headers
    }

    if (body) {
        options.body = JSON.stringify(body);
    }
    fetch(url, options)
        .then(res => res.json())
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            } else {
                console.log("Network error");
            }
        })
}

export function deleteData(url, id) {
    fetch(url + `/${id}`, {
        method: 'DELETE'
    }).catch(err => {
        if (err.status) {
            err.fullError.then(e => console.log(e.detail))
        } else {
            console.log("Network error");
        }
    })
}