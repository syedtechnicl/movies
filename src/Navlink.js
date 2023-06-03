import { Link,to } from "react-router-dom";
const Navlink = () => {
  return (
    <>
      <Link to="/home">Home</Link><br />
      <Link to="/about">about</Link>
      <br />
      <Link to="/contact">contact</Link>
    </>
  );
};
export default Navlink;
