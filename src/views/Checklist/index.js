import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  SectionList,
} from "react-native";

import { getFormattedDate } from "../../functions/date";

export default () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    setTasks((tasks) => [...tasks, { title: taskInput, added_in: new Date() }]);
    setTaskInput("");
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

      {tasks?.length < 1 ? (
        <Text>No tasks to show :D</Text>
      ) : (
        <SectionList
          sections={[
            { ...(tasks && { title: "Uncompleted", data: tasks }) },
            {
              ...(completedTasks && {
                title: "Completed",
                data: completedTasks,
              }),
            },
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item?.title}</Text>
              <Text style={styles.timestamp}>
                {getFormattedDate(item.added_in)}
              </Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      )}
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
