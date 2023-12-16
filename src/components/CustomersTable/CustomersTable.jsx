import './CustomersTable.scss';
import { StatusButton } from './StatusButton/StatusButton';

import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export function CustomersTable({ clients, filter, changeStatus }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Pagination & Range

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = clients.slice(startIndex, endIndex);
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  function calculateRange(currentPage, itemsPerPage, clients) {
    const totalClients = clients.length;

    if (totalClients === 0) {
      return 'No entries';
    }

    const lowerBound = (currentPage - 1) * itemsPerPage + 1;
    const upperBound = Math.min(currentPage * itemsPerPage, totalClients);

    return `Showing data ${lowerBound} to ${upperBound} of ${totalClients} entries`;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="first-cell">Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map(row => (
            <tr key={row.id}>
              <td className="first-cell">{row.customerName}</td>
              <td>{row.company}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.email}</td>
              <td>{row.country}</td>
              <td>
                <StatusButton status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex center">
        <p className="calculateRange">
          {calculateRange(currentPage, itemsPerPage, clients)}
        </p>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            variant="outlined"
            shape="rounded"
            boundaryCount={1}
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#404B52;',
                '&.Mui-selected, &:hover': {
                  backgroundColor: '#5932EA;',
                  color: '#FFF',
                },
              },
            }}
          />
        </Stack>
      </div>
    </>
  );
}
