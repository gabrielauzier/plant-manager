import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Keyboard, TextInput } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";

import { Container, Input, Title, Emoji } from "./styles";

export function UserIdentification() {
  const [inputText, setInputText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();
  const { navigate } = useNavigation();

  const localInputRef = useRef<TextInput>();

  const keyboardDidHideCallback = () => {
    localInputRef.current?.blur?.();
  };

  function toggleFocus() {
    setIsFocused(!isFocused);
  }

  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHideCallback
    );

    return () => {
      keyboardDidHideSubscription?.remove();
    };
  }, []);

  function handleConfirm() {
    if (inputText) navigate("Confirmation");
  }

  return (
    <Container>
      <Emoji>{!!inputText ? "😄" : "😃"}</Emoji>
      <Title>Como podemos{"\n"}chamar você?</Title>
      <Input
        placeholder="Digite um nome"
        onChangeText={setInputText}
        onSubmitEditing={handleConfirm}
        returnKeyType="send"
        autoCapitalize="none"
        autoCorrect={false}
        ref={(ref: TextInput) => {
          localInputRef && (localInputRef.current = ref);
        }}
        onBlur={toggleFocus}
        onFocus={toggleFocus}
        style={{
          borderBottomColor: isFocused ? theme.colors.green : theme.colors.gray,
        }}
      />
      <Button title="Confirmar" onPress={handleConfirm} enabled={!!inputText} />
    </Container>
  );
}
