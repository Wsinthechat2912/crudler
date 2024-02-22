import { StyleSheet, Text } from "react-native";
import Screen from "../../layout/Screen.js";
import UserForm from "../../entity/users/UserForm.js";

const UserModifyScreen = ({ navigation, route }) => {
  // Initialisations ---------------------
  const { user, onModify } = route.params;
  // State -------------------------------
  // Handlers ----------------------------
  const handleCancel = navigation.goBack;
  // View --------------------------------

  return (
    <Screen>
      <UserForm
        originalUser={user}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserModifyScreen;
