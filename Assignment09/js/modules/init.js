const xhr = new XMLHttpRequest()
xhr.responseType = 'json'

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let employees = xhr.response
        for (let employee of employees) {
            tbody.innerHTML += 
            `
            <tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td><a href="mailto:${employee[3]}">${employee[3]}</a></td>
                <td>${employee[4]}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>
            `
        }
    }
}
xhr.open('GET', '/data/employees.json')      //open the connection
xhr.send()                                   //initate 
xhr.onerror = (e) => {console.log(e.message)}