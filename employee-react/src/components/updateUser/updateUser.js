import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useEffect} from "react";
import "./updateUser.css";

    const UpdateUser = () => {
        const { id } = useParams();
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: ""
        });
    
        
        useEffect(() =>{
            const fetchUsers = async () => {
                try {
                    const responce = await fetch(`http://localhost:5000/api/user/${id}`);
                    const data = await responce.json();
                    setFormData(data);
                } catch (error) {
                    console.error("error while feching users", error.message);
                }
            }
            fetchUsers();
        }, [id]);

        const handleInputChange = (event) => {
            const {name, value} = event.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    
        const handleSubmit = async(e)=>{
            e.preventDefault();
            try{
                const response = await fetch(`http://localhost:5000/api/user/${id}`, {
                    method:"PATCH",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                })
                const data = await response.json(response);
                console.log(formData);
                navigate("/");
            }catch(error){
                console.error(error.message);
            }
            
        }

    return (
        <div className="center-form">
            <h1>Update User</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        defaultValue={formData.name}
                        onChange={handleInputChange}    
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email"
                        name="email"
                        placeholder="Enter Email address"
                        value={formData.email}
                        onChange={handleInputChange}    
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        type="text"
                        name="phone"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={handleInputChange}    
                    />
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100">Update User</Button>
            </Form>
        </div>
    );   
};
export default UpdateUser;