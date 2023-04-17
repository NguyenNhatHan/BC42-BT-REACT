import React from 'react'
import { useSelector } from 'react-redux'

function Bill() {
  const { seatSelected } = useSelector(state => state.seat)

  return (
        <table className='table'>
          <thead className='textColor'>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {/* {seatSelected.map((item) => {
              return (
                <tr key={item.soGhe}>
                  <td>{item.soGhe}</td>
                  <td>{item.gia.toLocaleString()}</td>
                </tr>
              )
            }
            )} */}
            {seatSelected.length > 0 && seatSelected.map((item) => {
              if(item.length > 0) {
                return item.map((seat) => {
                  return (
                    <tr key={seat.soGhe}>
                      <td>{seat.soGhe}</td>
                      <td>{seat.gia?.toLocaleString()}</td>
                    </tr>
                  )
                })
              }
            })

            }
          </tbody>
        </table>
  )
}




export default Bill