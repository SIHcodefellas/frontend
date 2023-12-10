import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const Back = require("./Back.png");
const CommentScreen = () => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const navigation = useNavigation();
  const addComment = () => {
    if (comment.trim() !== "") {
      setAllComments([...allComments, comment]);
      setComment("");
    }
  };

  return (
    <View style={{ width: "100%", padding: 16 }}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Image source={Back} style={styles.backButton}></Image>
      </TouchableOpacity>
      <View style={styles.commentsContainer}>
        {allComments.map((c, index) => (
          <View key={index}>
            <Text>{c}</Text>
            {index < allComments.length - 1 && (
              <View style={styles.commentLine}></View>
            )}
          </View>
        ))}
      </View>

      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <TextInput
          style={{
            flex: 1,
            marginRight: 8,
            padding: 8,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
          placeholder="Add a comment"
          value={comment}
          onChangeText={(text) => setComment(text)}
        />

        <Button title="Add" onPress={addComment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentsContainer: {
    marginBottom: 16,
  },
  commentLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 8,
  },
  backButton: {
    width: 25,
    height: 25,
    padding: 1,
  },
});

export default CommentScreen;
