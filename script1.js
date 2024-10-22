// Getting references to form inputs and expense list

const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

// Add event listener for form submission

expenseForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Collect form values

    const date = document.getElementById('date').value;
    const income = document.getElementById('income').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    const netIncome = document.getElementById('balance').value;

    // Validate form inputs

    if (date && income && description && category && amount && balance) {
       
        // Create a new row in the expense table

        const row = document.createElement('tr');

        // Add columns to the row

        row.innerHTML = `
            <td>${date}</td>
            <td>${income}</td>
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount}</td>
            <td>${netIncome}</td>
            <td><button class="delete-btn">Remove</button></td>
        `;

        // Append the new row to the expense table

        expenseList.appendChild(row);

        // Reset the form after adding the expense

        expenseForm.reset();

        // Add event listener to the delete button to remove the expense

        const deleteButton = row.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            expenseList.removeChild(row); // Remove the expense row
        });
    } else {
        alert('Please fill out all fields.');
    }
});