import { FilterInput } from 'components/FilterInput/FilterInput';
import { CustomersTable } from 'components/CustomersTable/CustomersTable';
import { useState } from 'react';
import { useUserName } from 'components/context/nameContext';
import clientsData from 'clients.json';
import './Customers.scss';

function Customers() {
  const clients = clientsData;
  const [filter, setFilter] = useState('');
  const { userName } = useUserName();

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const filteredClients = clients.filter(client => {
    if (client.customerName.toLowerCase().includes(filter.toLowerCase())) {
      return client;
    } else if (client.company.toLowerCase().includes(filter.toLowerCase())) {
      return client;
    } else if (client.country.toLowerCase().includes(filter.toLowerCase())) {
      return client;
    }
    return false;
  });

  return (
    <>
      <h1 className="greeting">Hello {userName} 👋🏼</h1>
      <div className="white-container">
        <div className="flex center">
          <div>
            <h2 className="title">All Customers</h2>
            <p className="active-members">Active members</p>
          </div>
          <FilterInput handleFilter={handleFilter} />
        </div>
        <CustomersTable clients={filteredClients} filter={filter} />
      </div>
    </>
  );
}

export default Customers;
