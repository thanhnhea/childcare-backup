import { useState } from "react";
import ChildlList from "./child-list";
import BookingList from "./booking-list";

const BoardParent = () => {

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [<ChildlList />, <BookingList />,];

    return (
        <div className="container-fluid mt-5 mb-5">
            <ul className="nav nav-tabs w-100">
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 0 ? 'active' : ''}`}
                        onClick={() => setActiveTab(0)}
                    >
                        Children List
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => setActiveTab(1)}
                    >
                        My Booking List
                    </a>
                </li>

            </ul>
            <div className="tab-content">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
                    >
                        {tab}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default BoardParent;