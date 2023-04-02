import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Search from './Search'
import UserForm from './UserForm'
import UserList from './UserList'

function UserManagement() {
    //  state quản lý danh sách người dùng
    const [users, setUser] = useState([])

    // state quản lý user đang đc chọn
    const [selectedUser, setSelectedUser] = useState({})

    // state quản lý giá trị tìm kiếm
    const [searchByName, setSearchByName] = useState("")

    // viết hàm xử lý nhận vào object user và thêm hoặc cập nhật user
    const handleSubmit = async (user) => {
        const {id, ...payload} = user

        try {
            if (id) {
                //  cập nhật
                await axios.put(`https://63ecba1931ef61473b27eb9e.mockapi.io/AIP/users/${id}`,payload)
            } else {
                // thêm mới
                await axios.post("https://63ecba1931ef61473b27eb9e.mockapi.io/AIP/users", payload)
            }

            //  gọi hàm fetchUsers sau khi call API  create/ update
            fetchUsers()

        } catch (error){
            console.log(error)
        }
        
    }

    // viết hàm xử lý nhận vào userId, xóa user 
    const handleDeleteUser = async (userId) => {
        // const newUsers = users.filter((user) => user.id !== userId);
        // setUser(newUsers);
        try {
            await axios.delete(
                `https://63ecba1931ef61473b27eb9e.mockapi.io/AIP/users/${userId}`
            );
            // sau khi xóa thành công, dữ liệu chỉ mới thay đổi ở phía sever
            // cần gọi lại hàm fetchUsers để gọi API để lấy danh sách users mới nhất và set lại cho state users
            fetchUsers();

        } catch (error) {
            console.log(error)
        }

    }

    // viết hàm xử lý nhận vào object user
    const handleSelectUser = (user) => {
        setSelectedUser(user)
    }

    //  vietts hàm call api để lấy danh sách users
    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://63ecba1931ef61473b27eb9e.mockapi.io/AIP/users", {
                params: {
                    name: searchByName || undefined,
                }
            })
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    //  viết hàm xử lý nhận vào giá trị searchString
    const handleSearch = (searchString) => {
        setSearchByName(searchString)
        //  khi state searchByEmail thay dổi, ta muốn gọi là fetchUser
        // => 
    }

    useEffect(() => {
        fetchUsers();
    }, [searchByName])

    return (
        <div className='container'>
            <h1 className='text-center text-primary mt-3'>Management</h1>
            <div className='card'>
                <div className='card-header bg-dark text-white'>Form</div>
                <div className='card-body'>
                    <UserForm user={selectedUser} onSubmit={handleSubmit} onReset={() => setSelectedUser({})} />
                </div>
            </div>

            <div className='mt-4'>  
                <Search onSearch={handleSearch} />
            </div>

            <div className='mt-4'>
                <UserList users={users} onDeleteUser={handleDeleteUser} onSelectUser={handleSelectUser} />
            </div>
        </div>
    )
}

export default UserManagement