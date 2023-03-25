import { useState, useEffect } from "react";
import authService from "../../services/auth.service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userService from "../../services/user.service";
import { Pagination } from "react-bootstrap";
import './booking-list.css'

const BookingList = () => {

    const [bookings, setBookings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [bookingsPerPage, setBookingsPerPage] = useState(10);
    const user = authService.getCurrentUser();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await userService.getAllBookingByUser(user.id);
                setBookings(data.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
                toast.error('Error fetching bookings. Please try again later.');
            }
        };
        fetchData();
    }, []);

    const indexOfLastBooking = currentPage * bookingsPerPage;
    const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
    const currentBookings = bookings.slice(
        indexOfFirstBooking,
        indexOfLastBooking
    );

    const handleCancelBooking = async (bookingId) => {
        try {
            await userService.cancelBooking(bookingId);
            const updatedBookings = bookings.filter(
                (booking) => booking.id !== bookingId
            );
            setBookings(updatedBookings);
            toast.success("Booking cancelled successfully.");
        } catch (error) {
            console.error("Error cancelling booking:", error);
            toast.error("Error cancelling booking. Please try again later.");
        }
    };
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <h1>Booking List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Child's First Name</th>
                        <th>Child's Last Name</th>
                        <th>Service Name</th>
                        <th>Serivce Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentBookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.createDate}</td>
                            <td>{booking.time}</td>
                            <td>{booking.childID.firstName}</td>
                            <td>{booking.childID.lastName}</td>
                            <td>{booking.serviceId.serviceTitle}</td>
                            <td>{booking.serviceId.servicePrice}</td>
                            <td>{booking.status}</td>
                            <td>
                                {booking.status === "Pending" && (
                                    <button onClick={() => handleCancelBooking(booking.id)}>
                                        Cancel
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                bookingsPerPage={bookingsPerPage}
                totalBookings={bookings.length}
                paginate={paginate}
            />
            <ToastContainer />
        </div>
    );
};
export default BookingList;