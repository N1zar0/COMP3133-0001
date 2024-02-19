const { gql } = require('apollo-server-express');

const employeeSchema = gql`
  type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String
    salary: Float!
  }

  input EmployeeInput {
    first_name: String!
    last_name: String!
    email: String!
    gender: String
    salary: Float!
  }

  type Query {
    getAllEmployees: [Employee]
    getEmployeeById(id: ID!): Employee
  }

  type Mutation {
    addEmployee(input: EmployeeInput!): Employee
    updateEmployee(id: ID!, input: EmployeeInput!): Employee
    deleteEmployee(id: ID!): Employee
  }
`;

module.exports = employeeSchema;
