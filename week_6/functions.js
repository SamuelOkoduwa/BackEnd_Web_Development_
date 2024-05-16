const employee = require('./Model/employeeModel')
const employees = require('./Model/employeeModel')

const handleGetRequest = async(req, res)=>{
	res.status(200).send('Welcome to Home Page')
}

const getEmployeeRequest = async(req, res)=>{
	const Employees = await employees.find()	//Find all employees data
	return res.status(200).json({
		message: 'Successful',
		totalEmployees: Employees.length,
		Employees,
		
	})	
}

const postEmployeeRequest = async (req, res)=>{
	// res.status(200).send('Welcome to post request')
	const {firstName, lastName, email, department, position, salary, hireDate} = req.body;	//Getting the details to add from the request body
	const newEmployee = new employees({firstName, lastName, email, department, position, salary, hireDate});	// Creating a new instance of the employee model

	await newEmployee.save()

	return res.status(200).json({
		message: "New Employee added Successfully",
		addedEmployee: newEmployee
	})
}

const putEmployeeRequest = async(req, res)=>{
	const { id } = req.params		//to get the id

	const {firstName, lastName, email, department, position, salary, hireDate} = req.body;	//Getting the details to add from the request body

	const update = await employees.findByIdAndUpdate(
		id, //pass the id to update
		{firstName, lastName, email, department, position, salary, hireDate},
		{new: true}
	)
	return res.status(200).json({
		message: 'Modified Successfully',
		newUpdate: update
	})
}

const deleteEmployeeRequest = async(req, res)=>{
	const {id} = req.params;
	const deleteEmployee = await employees.findByIdAndDelete(id)

	return res.status(200).json({
		message: 'Employee Deleted Successfully',
		newDelete: deleteEmployee
	})
}

module.exports = {
	handleGetRequest,
	getEmployeeRequest,
	postEmployeeRequest,
	putEmployeeRequest,
	deleteEmployeeRequest
}