import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  SectionList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { getFormattedDate } from "../../functions/date";

export default () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    setTasks((tasks) => [...tasks, { title: taskInput, added_in: new Date() }]);
    setTaskInput("");
  };

  const completeTask = (task) => {
    task.completed_in = new Date();

    setTasks((tasks) => tasks.filter((t) => t?.title !== task?.title));
    setCompletedTasks((completedTasks) => [...completedTasks, task]);

    console.log(tasks);
  };

  const getTasks = () => {
    const data = [];
    if (tasks?.length > 0) data.push({ title: "Pending", data: tasks });

    if (completedTasks?.length > 0)
      data.push({ title: "Completed", data: completedTasks });

    return data;
  };

  return (
    <View style={{ margin: 10 }}>
      <View style={styles.input}>
        <TextInput
          style={{ width: "75%" }}
          value={taskInput}
          onChangeText={setTaskInput}
          placeholder="Take my unicorn for a walk..."
        />
        <TouchableHighlight onPress={() => addTask()} style={styles.button}>
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableHighlight>
      </View>
      <SectionList
        sections={getTasks() || []}
        keyExtractor={(item, index) => item + index}
        ListEmptyComponent={<Text>No tasks to show :D</Text>}
        renderItem={({ item, section }) => (
          <View style={styles.item}>
            <Ionicons
              style={{ marginHorizontal: 7 }}
              name={
                section?.title === "Pending" ? "square-outline" : "checkbox"
              }
              size={32}
              color={section?.title === "Pending" ? "#CED0E8" : "#45B0DE"}
              onPress={() => completeTask(item)}
            />
            <View>
              <Text style={styles.title}>{item?.title}</Text>
              <Text style={styles.timestamp}>
                {section?.title === "Pending"
                  ? `Added in ${getFormattedDate(item?.added_in)}`
                  : `Completed in ${getFormattedDate(item?.completed_in)}`}
              </Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    fontSize: 14,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#45B0DE",
    height: 100 + "%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
  },
  header: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
  },
  timestamp: {
    fontSize: 14,
    color: "grey",
  },
});
