import { FilterInput } from 'components/FilterInput/FilterInput';
import { CustomersTable } from 'components/CustomersTable/CustomersTable';

function Customers() {
  return (
    <div className="white-container">
      <h2>All Customers</h2>
      <p>Active members</p>
      <FilterInput />
      <CustomersTable />
    </div>
  );
}

export default Customers;
