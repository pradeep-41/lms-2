import React from "react";
import { Text } from "./typography/Text";

export const DateDisplay: React.FC = () => {
  const date = new Date();
  const dayOfWeekIndex = date.getDay();
  const dayOfMonth = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = `${daysOfWeek[dayOfWeekIndex]}, ${dayOfMonth} ${months[monthIndex]} ${year}`;

  return (
    <Text variant="subtitle">{formattedDate}</Text>

  );
};
