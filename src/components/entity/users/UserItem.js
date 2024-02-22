import { Pressable, StyleSheet, Text, View } from "react-native";

const UserItem = ({ user, onSelect }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  const handleSelect = () => onSelect(user);

  // View --------------------------------
  return (
    <Pressable onPress={handleSelect}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {user.UserFirstname} {user.UserLastname} ({user.UserUsertypeName})
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
});

export default UserItem;
