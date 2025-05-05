function User() {
  const student = [
    {
      Name: "Sayma",
      School: "A.N College",
      Degree: "MBA",
    },
    {
      Name: "Sajid",
      School: "SMU",
      Degree: "MCA",
    },
  ];

  return (
    <div>
      <h3>Component Loop</h3>
      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>School</td>
            <td>Degree</td>
          </tr>
        </thead>
        <tbody>
          <td>Sayma</td>
          <td>A.N.College</td>
          <td>M.B.A</td>
        </tbody>
        <tbody>
        <td>Sajid</td>
          <td>SMU</td>
          <td>M.C.A</td>
        </tbody>
      </table>
    </div>
  );
}
export default User;
