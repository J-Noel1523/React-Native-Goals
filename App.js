import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Testing from "./components/Testing";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandle = (goalTitle) => {
    if (goalTitle.length === 0) {
      return alert("Please enter goal or Cancel");
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const deleteGoal = (goalID) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != goalID);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Testing />
      <Button
        color="#1793d0"
        title="Add New Goal"
        onPress={() => setIsAddMode(true)}
      />
      <GoalInput
        visible={isAddMode}
        onCancel={cancelGoalHandler}
        onAddGoal={addGoalHandle}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={deleteGoal}
            id={itemData.item.id}
            title={itemData.item.value}
          />
        )}
      ></FlatList>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 100,
    flex: 1,
  },
  addNewGoalBtn: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "pink",
  },
});
