const Employee = require('../models/employee');

const employeeResolver = {
  Query: {
    getAllEmployees: async () => {
      try {
        const employees = await Employee.find();
        return employees;
      } catch (error) {
        throw new Error(`Failed to fetch all employees: ${error.message}`);
      }
    },
    getEmployeeById: async (_, { id }) => {
      try {
        const employee = await Employee.findById(id);
        return employee;
      } catch (error) {
        throw new Error(`Failed to fetch employee by ID: ${error.message}`);
      }
    }
  },
  Mutation: {
    addEmployee: async (_, { input }) => {
      try {
        const newEmployee = new Employee(input);
        await newEmployee.save();
        return newEmployee;
      } catch (error) {
        throw new Error(`Failed to add new employee: ${error.message}`);
      }
    },
    updateEmployee: async (_, { id, input }) => {
      try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, input, { new: true });
        return updatedEmployee;
      } catch (error) {
        throw new Error(`Failed to update employee: ${error.message}`);
      }
    },
    deleteEmployee: async (_, { id }) => {
      try {
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        return deletedEmployee;
      } catch (error) {
        throw new Error(`Failed to delete employee: ${error.message}`);
      }
    }
  }
};

module.exports = employeeResolver;
