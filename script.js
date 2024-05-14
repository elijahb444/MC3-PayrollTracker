// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//initialize employee array 
const employeesArray = []

// Collect employee data
const collectEmployees = function() {


// while loop keeps adding employees until user cancels
  let addUser = true
    while (addUser) {
      let employee = {
        firstName: "First",
        lastName: "Last",
        salary: 0
      }
      //adding to employee object
        employee.firstName = prompt("What is the employee's first name?")
        employee.lastName = prompt("What is the employee's last name?")
        let userSalary = (prompt("What is the employee's annual salary?"))

    

      //checking to make sure salary is a valid integer
      if ((userSalary < 0) || (userSalary > 100000000000) || isNaN(userSalary)) {
        employee.salary = parseInt(prompt("Stop playin. Enter a valid salary."))

         //use parseInt to convert salary input from string to integer
        //found on W3
      }
      else {
        employee.salary = parseInt(userSalary)
      }

      employeesArray.push(employee)


      // asking if user will add another employee
      addUser = confirm("Employee added. Would you like to add another?")
      

  }
  
  return employeesArray
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0
    for (i = 0; i < employeesArray.length; i++) {
      sum += employeesArray[i].salary
    }
    const average = sum / employeesArray.length
    return console.log(`There are ${employeesArray.length} employees. The average salary is ${average}.`)
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //generates random index from array
  const randomIndex = Math.floor(Math.random() * employeesArray.length)

  return console.log(`Congratulations, ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}! You win!`)
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
