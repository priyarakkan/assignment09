// const xhr = new XMLHttpRequest()
// xhr.responseType = 'json'

// xhr.onreadystatechange = () => {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let employees = xhr.response
//         for (let employee of employees) {
//             tbody.innerHTML += 
//             `
//             <tr>
//                 <td>${employee[0]}</td>
//                 <td>${employee[1]}</td>
//                 <td>${employee[2]}</td>
//                 <td><a href="mailto:${employee[3]}">${employee[3]}</a></td>
//                 <td>${employee[4]}</td>
//                 <td><button class="btn btn-sm btn-danger delete">X</button></td>
//             </tr>
//             `
//         }
//     }
// }
// xhr.open('GET', '/data/employees.json')      //open the connection
// xhr.send()                                   //initate 
// xhr.onerror = (e) => {console.log(e.message)}

fetch('/data/employees.json')
.then(response => response.json())
.then(data => {
    for (let employee of data.employees) {
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
    // KEEP THE USER ON THE COMMAND MENU
    do {
        //ALLOW THE USER TO ENTER A COMMAND
        let command = prompt('Enter a command')
        if (command !== null) {
            command = command.toLowerCase()
            if (command === 'add') {

            } else if (command === 'del') {

            } else if (command === 'exit') {

            } else {
                alert('Please enter a valid command')
            }
        } else {
            alert('Please enter a command')
        }
    } while(true)
    console.log('The application has terminated')
})
.catch(e => console.log(e.message))

