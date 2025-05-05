function Loop() {
  const userdata = [
    {
      name: "Sayma",
      age: 35,
      email: "sayma.gmail.com",
    },

    {
      name: "Ruhi",
      age: 30,
      email: "ruhi.gmail.com",
    },

    {
      name: "Sajid",
      age: 45,
      email: "sajid.gmail.com",
      id:5
    },
    {
        name:"Suhaan",
        age:10
    }
  ];

 
   
  return (
    <div>
      <h2 style={{ color: "blue" }}>Array Loop in jsx</h2>

      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>id</td>
          </tr>
          
        </thead>
        <tbody>
          {userdata.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.id}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
     

      <hr />
      <h3 style={{color: "blue"}}>Dummy Table</h3>

      <table border={1}>
        <theader>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Email</td>
                <td>Id</td>
            </tr>
            <tbody>
                <td>Sayma</td>
                <td>35</td>
                <td>sayma@gmail.com</td>
                <td>1</td>
            </tbody>
            <tbody>
                <td>SR</td>
                <td>31</td>
                <td>sr@gmail.com</td>
                <td>3</td>
            </tbody>
        </theader>
      </table>
    </div>
  );
}
export default Loop;
