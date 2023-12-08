export const CustomerRow = ({
  client: { customerName, company, phoneNumber, email, country, status },
}) => {
  return (
    <tr>
      <td>{customerName}</td>
      <td>{company}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td>{status}</td>
    </tr>
  );
};
