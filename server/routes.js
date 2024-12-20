const express = require('express');
    const faunadb = require('faunadb');
    const {
      Create,
      Collection,
      Match,
      Index,
      Get,
      Ref,
      Paginate,
      Documents,
      Lambda,
      Var,
      Map,
      Delete,
      Update,
    } = faunadb.query;
    const router = express.Router();

    // Configure FaunaDB client
    const client = new faunadb.Client({
      secret: process.env.FAUNADB_SECRET,
      domain: 'db.fauna.com',
      scheme: 'https',
    });

    // Dummy data for employees
    let employees = [
      { id: 1, name: 'John Doe', department: 'Security', arrival: null, departure: null },
      { id: 2, name: 'Jane Smith', department: 'IT', arrival: null, departure: null },
    ];

    // Get all employees
    router.get('/employees', async (req, res) => {
      try {
        const response = await client.query(
          Map(Paginate(Documents(Collection('employees'))), Lambda('employeeRef', Get(Var('employeeRef'))))
        );
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching employees');
      }
    });

    // Get employee by ID
    router.get('/employees/:id', async (req, res) => {
      try {
        const employee = await client.query(Get(Ref(Collection('employees'), req.params.id)));
        if (!employee) return res.status(404).send('Employee not found.');
        res.json(employee.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching employee');
      }
    });

    // Add a new employee
    router.post('/employees', async (req, res) => {
      try {
        const newEmployee = {
          name: req.body.name,
          department: req.body.department,
          arrival: null,
          departure: null,
        };

        const response = await client.query(Create(Collection('employees'), { data: newEmployee }));
        res.status(201).json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error adding employee');
      }
    });

    // Update an existing employee
    router.put('/employees/:id', async (req, res) => {
      try {
        const updatedEmployee = {
          name: req.body.name,
          department: req.body.department,
          arrival: req.body.arrival,
          departure: req.body.departure,
        };

        const response = await client.query(
          Update(Ref(Collection('employees'), req.params.id), { data: updatedEmployee })
        );
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error updating employee');
      }
    });

    // Delete an employee
    router.delete('/employees/:id', async (req, res) => {
      try {
        await client.query(Delete(Ref(Collection('employees'), req.params.id)));
        res.send('Employee deleted.');
      } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting employee');
      }
    });

    // Update employee arrival time
    router.put('/employees/:id/arrival', async (req, res) => {
      try {
        const employee = employees.find((e) => e.id === parseInt(req.params.id));
        if (!employee) return res.status(404).send('Employee not found.');

        employee.arrival = new Date().toISOString();
        const response = await client.query(
          Update(Ref(Collection('employees'), req.params.id), { data: { arrival: employee.arrival } })
        );

        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error updating arrival time');
      }
    });

    // Update employee departure time
    router.put('/employees/:id/departure', async (req, res) => {
      try {
        const employee = employees.find((e) => e.id === parseInt(req.params.id));
        if (!employee) return res.status(404).send('Employee not found.');

        employee.departure = new Date().toISOString();
        const response = await client.query(
          Update(Ref(Collection('employees'), req.params.id), { data: { departure: employee.departure } })
        );

        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error updating departure time');
      }
    });

    // Get all visitors
    router.get('/visitors', async (req, res) => {
      try {
        const response = await client.query(
          Map(Paginate(Documents(Collection('visitors'))), Lambda('visitorRef', Get(Var('visitorRef'))))
        );
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching visitors');
      }
    });

    // Add a new visitor
    router.post('/visitors', async (req, res) => {
      try {
        const newVisitor = {
          name: req.body.name,
          purpose: req.body.purpose,
          arrival: new Date().toISOString(),
          departure: null,
        };

        const response = await client.query(Create(Collection('visitors'), { data: newVisitor }));
        res.status(201).json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error adding visitor');
      }
    });

    // Update visitor departure time
    router.put('/visitors/:id/departure', async (req, res) => {
      try {
        const response = await client.query(
          Update(Ref(Collection('visitors'), req.params.id), { data: { departure: new Date().toISOString() } })
        );
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error updating visitor departure time');
      }
    });

    module.exports = router;
