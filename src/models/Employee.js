export const fetchEmployees = async () => {
      const response = await fetch('/api/employees');
      const data = await response.json();
      return data;
    };

    export const createEmployee = async (employee) => {
      const response = await fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
      const data = await response.json();
      return data;
    };

    export const updateEmployee = async (employee) => {
      const response = await fetch(`/api/employees/${employee.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
      const data = await response.json();
      return data;
    };

    export const deleteEmployee = async (id) => {
      const response = await fetch(`/api/employees/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    };
