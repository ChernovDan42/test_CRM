import { FilterInput } from 'components/FilterInput/FilterInput';
import { CustomersTable } from 'components/CustomersTable/CustomersTable';
import { useEffect, useState } from 'react';
import clientsData from 'clients.json';
import './Customers.scss';

function Customers() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [clients, setClientsData] = useState(clientsData);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
  });

  return (
    <>
      {/* {windowWidth >= 1440 && <MobileSideBar isMenuOpen={true} />} */}

      <div className="white-container">
        <div className="flex center">
          <div>
            <h2 className="title">All Customers</h2>
            <p className="active-members">Active members</p>
          </div>
          <FilterInput handleFilter={handleFilter} />
        </div>
        <CustomersTable clients={filteredClients} />
      </div>
    </>
  );
}

export default Customers;
