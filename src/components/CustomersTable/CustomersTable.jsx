import { CustomerRow } from './CustomerRow/CustomerRow';
import styles from './CustomersTable.module.scss';
import clientsData from 'clients.json';
import { useState } from 'react';

export const CustomersTable = () => {
  const [clients, setClients] = useState(clientsData);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => {
            return <CustomerRow key={client.id} client={client} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
