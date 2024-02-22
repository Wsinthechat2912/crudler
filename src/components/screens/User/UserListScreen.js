import { useState, useEffect } from "react";
import { LogBox, StyleSheet, Text } from "react-native";
import Screen from "../../layout/Screen.js";
import UserList from "../../entity/users/UserList.js";
import { Button, ButtonTray } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";
import API from "../../API/API.js";
import RenderCount from "../../UI/RenderCount.js";

const UserListScreen = ({ navigation }) => {
  // Initialisations ---------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
    "",
  ]);

  // State -------------------------------
  const UsersEndpoint = "https://softwarehub.uk/unibase/api/users";

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadUsers = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) setUsers(response.result);
  };

  useEffect(() => {
    loadUsers(UsersEndpoint);
  }, []);

  // Handlers ----------------------------
  const handleDelete = (user) =>
    setUsers(users.filter((item) => item.UserID !== user.UserID));

  const handleAdd = (user) => setUsers([...users, user]);

  const handleModify = (updatedUser) =>
    setUsers(
      users.map((user) =>
        user.UserID === updatedUser.UserID ? updatedUser : user
      )
    );

  const onDelete = (user) => {
    handleDelete(user);
    navigation.goBack();
  };

  const onAdd = (user) => {
    handleAdd(user);
    navigation.goBack();
  };

  const onModify = (user) => {
    handleModify(user);
    navigation.navigate("UserListScreen");
  };

  const gotoViewScreen = (user) =>
    navigation.navigate("UserViewScreen", { user, onDelete, onModify });

  const gotoAddScreen = () => navigation.navigate("UserAddScreen", { onAdd });

  // View --------------------------------
  return (
    <Screen>
      <RenderCount />
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      {isLoading && <Text>Loading Records ...</Text>}
      <UserList users={users} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserListScreen;
