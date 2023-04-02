import React, { useState, useEffect } from 'react'

function UserForm({ user, onSubmit, onReset }) {
    // state quản lý giá trị của các input
    const [values, setValues] = useState({
        name: "",
        type: "",
        description: "",
        image: "",
        price: "",
    })

    //  Hàm setup của useEffect sẽ đc chạy ở sau lần render đầu tiên và sau mỗi lần render tiếp theo nếu giá trị của prop user bị thay đổi
    useEffect(() => {
        //  dùng giá trị mới của prop user để cập nhật cho state values
        setValues(user)
    }, [user])

    const handleSubmit = (evt) => {
        // chặn hành vi submit mặc định của form
        evt.preventDefault()

        // tạo object user từ giá trị của các input
        // const user = {...values, id: Math.floor(Math.random()*100)};

        // gọi prop onSubmit và truyền vào object values, và tham số để xác định xem ra thêm mới hay cập nhật
        onSubmit(values);

        // gọi hàm handleResetForm để reset giá trị trên các input về rỗng
        handleResetForm()
    }
    const handleChange = (evt) => {
        const {value, name} = evt.target
        setValues({
            ...values,
            [name]: value,
        })
        
    }

    const handleResetForm = () => {
        setValues({
          name: "",
          type: "",
          description: "",
          image: "",
          price: "",
        })
        onReset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label'>
                    Name
                </label>
                <input name='name' type="text" className='form-control' value={values.name} onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>
                    Type
                </label>
                <input name='type' type="text" value={values.type}
                onChange={handleChange} className='form-control' />
            </div>
            <div className='mb-3'>
                <label className='form-label'>
                description
                </label>
                <input name='description' value={values.description} onChange={handleChange} type="text" className='form-control' />
            </div>
            <div className='mb-3'>
                <label className='form-label'>
                    image
                </label>
                <input name='image' value={values.image} onChange={handleChange} type="text" className='form-control' />
            </div>
            <div className='mb-3'>
                <label className='form-label'>
                    Price
                </label>
                <input name='price' type="text" value={values.price}
                onChange={handleChange} className='form-control' />
            </div>

            <button type='submit' className='btn btn-success me-2'>Submit</button>
            <button onClick={handleResetForm} type='button' className='btn btn-secondary'>Reset</button>
        </form>
    )
}

export default UserForm