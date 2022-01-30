import { useEffect, useState } from "react";
import NotifCard from "./notifCard";
import Loader from "./loader";

const MainSection = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/notifications"
    );
    const data = await response.json();
    setNotifications(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="mt-10">
        <p className="px-2 text-sm md:text-base md:px-5 lg:px-10 opacity-50">
          *Maximum 25 latest announcements from 2022 will be listed.(Currently
          only MOH,MOE and MOHCA are covered)
        </p>
        {notifications.map((notification) => (
          <NotifCard notification={notification} key={notification.id} />
        ))}
      </div>
    </>
  );
};

export default MainSection;
