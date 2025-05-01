import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BackIcon from '../../assets/pictures/backIcon.svg';
import ProfileIcon from '../../assets/pictures/accountt';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]); // Kosongkan awal chat
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, {text: input, fromUser: true}]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <BackIcon width={40} height={40} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saller Name</Text>
        <ProfileIcon width={40} height={40} />
      </View>

      {/* Chat Messages */}
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.chatBubble,
              msg.fromUser ? styles.userBubble : styles.sellerBubble,
            ]}>
            <Text style={styles.chatText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Ketik pesan..."
          placeholderTextColor="#888"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Text style={styles.sendButton}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1E28',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#1B1E28',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  chatBubble: {
    padding: 14,
    borderRadius: 18,
    marginVertical: 6,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#EEEEEE',
    alignSelf: 'flex-end',
  },
  sellerBubble: {
    backgroundColor: '#393E46',
    alignSelf: 'flex-start',
  },
  chatText: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
    padding: 14,
    backgroundColor: '#1B1E28',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 12,
    fontSize: 16,
    color: '#000',
  },
  sendButton: {
    color: 'white',
    fontSize: 26,
  },
});
