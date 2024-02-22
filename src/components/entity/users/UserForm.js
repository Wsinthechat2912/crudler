import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";

const defaultUser = {
  UserID: null,
  UserFirstname: null,
  UserLastname: null,
  UserEmail: null,
  UserImageURL: null,
  UserUsertypeName: null,
  UserYear: null,
};

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
  // Initialisations ---------------------
  (defaultUser.UserID = Math.floor(100000 + Math.random() * 900000)),
    (defaultUser.UserImageURL =
      "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg");

  const levels = [
    { value: 3, label: "Staff" },
    { value: 4, label: "Student" },
  ];

  // State -------------------------------
  const [user, setUser] = useState(originalUser || defaultUser);

  // Handlers ----------------------------
  const handleChange = (field, value) => setUser({ ...user, [field]: value });

  const handleSubmit = () => onSubmit(user);

  // View --------------------------------
  const submitLabel = originalUser ? "Modify" : "Add";
  const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="User Firstname"
        value={user.UserFirstname}
        onChange={(value) => handleChange("UserFirstname", value)}
      />

      <Form.InputText
        label="User Lastname"
        value={user.UserLastname}
        onChange={(value) => handleChange("UserLastname", value)}
      />

      <Form.InputText
        label="User Email"
        value={user.UserEmail}
        onChange={(value) => handleChange("UserEmail", value)}
      />

      <Form.InputText
        label="User Image"
        value={user.UserImageURL}
        onChange={(value) => handleChange("UserImageURL", value)}
      />

      <Form.InputSelect
        label="User Type"
        prompt="Select User Type ..."
        options={levels}
        value={user.UserUsertypeName}
        onChange={(value) => handleChange("UserUsertypeName", value)}
      />

      <Form.InputText
        label="User Year"
        value={user.UserYear}
        onChange={(value) => handleChange("UserYear", value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default UserForm;
