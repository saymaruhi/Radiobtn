const Userdata = ({ user }) => {
  return (
    <div style={{border: "1px solid green",
        padding: "10px",
        margin: "10px",
        width: "600px",
        borderRadius: "10px",
        backgroundColor:"pink"}}>
      <h3>Name: <span  style= {{color:"green"}}>{user.Name}</span></h3>
      <h3>School: <span style={{color:"green"}}> {user.School}</span></h3>
      <h3>Degree:<span style={{color:"green"}}> {user.Degree}</span> </h3>
    </div>
  );
};


export default Userdata;


