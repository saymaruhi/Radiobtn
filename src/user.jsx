import Userdata from "./userdata";

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
      <h3 style={{ color: "blue" }}>Reuse Component in Loop</h3>
      {student.map((data) => (
        <div key={User.id}>
         <Userdata  user={data}/>
        </div>
      ))}
    </div>
  );
}
export default User;
