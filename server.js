import express from 'express';
    import bodyParser from 'body-parser';
    import cors from 'cors';
    import passport from './services/auth';
    import { fetchEmployees, createEmployee, updateEmployee, deleteEmployee } from './models/Employee';

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use(passport.initialize());

    app.get('/api/employees', async (req, res) => {
      const employees = await fetchEmployees();
      res.json(employees);
    });

    app.post('/api/employees', async (req, res) => {
      const employee = req.body;
      const createdEmployee = await createEmployee(employee);
      res.json(createdEmployee);
    });

    app.put('/api/employees/:id', async (req, res) => {
      const id = req.params.id;
      const employee = req.body;
      const updatedEmployee = await updateEmployee(employee);
      res.json(updatedEmployee);
    });

    app.delete('/api/employees/:id', async (req, res) => {
      const id = req.params.id;
      const deletedEmployee = await deleteEmployee(id);
      res.json(deletedEmployee);
    });

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
