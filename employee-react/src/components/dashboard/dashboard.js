import {useEffect} from "react";
import { useState} from "react";
import { Button } from "react-bootstrap";
import {Col, Table, Row, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    
    const fetchUsers = async () => {
        try {
           const responce = await fetch("http://localhost:5000/api/user")
           const data = await responce.json();
            setUsers(data);
        } catch (error) {
            console.error("error while feching users", error.messahe);
        }
    }

    useEffect(() =>{
        fetchUsers();
        }, []);

        const handleUpdate = (userId) => {
            navigate(`/user/${userId}`);
        }

        const handleDelete = async(userId) => {
            try {
                console.log(userId);
                const responce = await fetch(`http://localhost:5000/api/user/${userId}`,{
                    method: "DELETE",
                    body: JSON.stringify(userId)
                });
                console.log(responce);
                if(responce.ok){
                    fetchUsers();
                }

             } catch (error) {
                 console.error("Error while deleting user", error.message);
             }
        }
    
    return (
    
        <Container className="mt-5">
            <Row>
                <Col>
                 <h1 className="text-center">Dashboard (Employee List) </h1>
                  <Table striped boarder hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                           <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}> 
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                  <Button
                                    variant="outline-info"
                                    onClick={() => handleUpdate(user._id)}
                                    >
                                      Update
                                   </Button>{" "}
                                   <Button
                                   variant="outline-dark"
                                       onClick={() => handleDelete(user._id)}
                                    >
                                       Delete
                                    </Button> 
                               </td> 
                            </tr>
                         ))}
                    </tbody>
                 </Table>
                </Col>
            </Row>
        </Container>
       
        
    );
};
export default Dashboard;