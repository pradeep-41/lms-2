import { ScrollView, View } from "react-native";
import { Button } from "../button/Button";

export const ApplicationsLists = () => {
    const filterValue = [
      { id: "all", value: "All" }, 
      { id: "pending", value: "Pending" },
      { id: "granted", value: "Granted" },
      { id: "rejected", value: "Rejected" },
      { id: "cancelled", value: "Cancelled" }
    ]
  return (
    <ScrollView
      horizontal
      className="p-4 w-full"
   
      showsHorizontalScrollIndicator={false}
    >
      {filterValue.map((val) => (
        <View
          key={val.id}
          className="h-12 mr-4 bg-cyan-100 rounded-lg justify-center items-center"
        >
          <Button >
            {val.value}
          </Button>
        </View>
      ))}
    </ScrollView>
  );
};
