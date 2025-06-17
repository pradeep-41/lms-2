import { ScrollView } from "react-native";
import { Button } from "../button/Button";

export const ApplicationsLists = () => {
  const filterValue = [
    { id: "all", value: "All" },
    { id: "pending", value: "Pending" },
    { id: "granted", value: "Granted" },
    { id: "rejected", value: "Rejected" },
    { id: "cancelled", value: "Cancelled" },
  ];

  return (
    <ScrollView
      horizontal
      className="p-4 w-full"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 12, 
      }}
    >
      {filterValue.map((val) => (
        <Button
          key={val.id}
          variant="outline"
          colorScheme="primary"
          className="mr-4 h-[8%] px-4 py-2 " 
        >
          {val.value}
        </Button>
      ))}
    </ScrollView>
  );
};
