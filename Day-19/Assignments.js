//Assignment: Fetching Data from an API and Displaying in a Table
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const users = await response.json();

    let tableHTML = `
    <h2>Fetched Users:</h2>
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
        </tr>`;

    for(const user of users) {
        tableHTML += `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
        </tr>
        `;
    }

    tableHTML += `</table>`;
    document.writeln(tableHTML);
}


//Assignment 2: FeedBack Submission From (post requeswt with json)
