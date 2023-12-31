import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { getAllUsers, deleteUser } from "../../services/userService";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { toast } from "react-toastify";
import { MyContainer } from "../../components/MyContainer";

export default function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const users = await getAllUsers();
      setUsers(users.data.data);
    } catch (e) {
      toast.error("Failed to fetch users");
    }
  };

  const onClickDelete = async (userId) => {
    try {
      await deleteUser(userId);
      const deletedUserIdx = users.findIndex((usr) => usr._id === userId);
      const newUsers = [...users];
      newUsers.splice(deletedUserIdx, 1);
      setUsers(newUsers);
      toast.success("User deleted successfully");
    } catch (e) {
      toast.error("Failed to delete user");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <Container style={{ paddingTop: "50px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td style={{ width: "18rem" }}>
                  <Button
                    className="bi bi-trash3"
                    style={{
                      margin: "auto",
                      borderRadius: "100px",
                    }}
                    onClick={() => onClickDelete(user._id)}
                  ></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </ProtectedRoute>
  );
}
