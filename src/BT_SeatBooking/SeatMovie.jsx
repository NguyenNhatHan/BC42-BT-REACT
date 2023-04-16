import React from 'react'
import './styles.css'
import SeatItem from './SeatItem'
import Bill from './Bill'

function SeatBooking() {

  return (
    <div className="container">
      <h1>Chọn ghế xem phim</h1>
      
      <ul className="showcase mt-3">
        <li>
          <span className="seat selected" /> <span>Bạn chọn</span>
        </li>
        <li>
          <span className="seat occupied" /> <span>Đã chọn</span>
        </li>
      </ul>
      <SeatItem />
      <div className="screen">
        <h2 className="wthree text-center">Màn hình ở đây</h2>
      </div>
      <Bill />
    </div>

  )
}

export default SeatBooking