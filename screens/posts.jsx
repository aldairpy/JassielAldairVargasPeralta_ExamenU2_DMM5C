import { useNavigation } from "@react-navigation/native";
import { Card } from "@rneui/themed";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";

const Posts = () => {
  const posts = [
    {
      id: 1,
      username: "alda.py",
      img: require("../assets/img/8A07C694-C290-41C8-95BE-F6FC43764A4F.jpg"),
      desc: "Hola, me llamo Aldair y soy un desarrollador de software 👾",
    },

    {
      id: 2,
      username: "maisol.denisse_version",
      img: require("../assets/img/ef07dff3-6f5c-4ce2-9615-3eab265b4601.jpg"),
      desc: "Hola, me llamo Misael",
    },

    {
      id: 3,
      username: "TØP",
      img: require("../assets/img/IMG_1389.jpg"),
      desc: "I AM CLANCY",
    },
  ];

  const navigation = useNavigation();

  const goToProfile = (item) => {
    navigation.navigate("Profile", { item });
  };

  /*const modal = () => {
    const [modalVisible, setModalVisible] = useState(true);
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    );
  };*/

  const [likes, setLikes] = useState(0);

  const like = () => {
    setLikes(likes + 1);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "flex-start" }}>
        <ScrollView style={{ flexDirection: "row" }}>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              marginTop: 60,
            }}
          >
            <TouchableOpacity onPress={() => modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/8A07C694-C290-41C8-95BE-F6FC43764A4F.jpg")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                Tú
              </Card.Title>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/IMG_0024.jpg")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                Nicki
              </Card.Title>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/IMG_1389.jpg")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                TØP
              </Card.Title>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/IMG_0395.jpg")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                Kanye
              </Card.Title>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/IMG_0310.jpg")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                Spiterman
              </Card.Title>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/IMG_1128.jpg")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                Gato
              </Card.Title>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/IMG_1233.jpg")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                Hamilton
              </Card.Title>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {posts.map((item) => (
        <Card
          key={item.username + item.id}
          containerStyle={{
            backgroundColor: "black",
            borderRadius: 0,
            borderColor: "black",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity onPress={() => goToProfile(item)}>
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Card.Image source={item.img} style={styles.profilePic} />
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 20,
                }}
              >
                {item?.username}
              </Card.Title>
            </View>
          </TouchableOpacity>
          <Card.Divider />
          <Card.Image source={item.img} style={styles.img} />
          <Card.Divider />
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Card.Image
              source={require("../assets/img/8A07C694-C290-41C8-95BE-F6FC43764A4F.jpg")}
              style={styles.liked}
            />
            <Card.Title
              style={{
                color: "white",
                fontWeight: "bold",
                justifyContent: "center",
                alignSelf: "center",
                paddingTop: 20,
              }}
            >
              You liked
            </Card.Title>
          </View>
          <View style={styles.container2}>
            <Text style={styles.descU}>{item.username}:</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "auto",
    height: 500,
    alignSelf: "center",
  },

  container: {
    backgroundColor: "black",
  },

  container2: {
    backgroundColor: "black",
    flexDirection: "row",
    marginStart: 0,
  },

  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: "flex-start",
    margin: 10,
  },

  desc: {
    color: "white",
    padding: 10,
    fontSize: 16,
    width: "90%",
  },

  descU: {
    color: "white",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  stories: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignSelf: "flex-start",
    margin: 10,
  },

  border: {
    margin: 5,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 50,
    alignSelf: "flex-start",
  },

  liked: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignSelf: "flex-start",
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Posts;
