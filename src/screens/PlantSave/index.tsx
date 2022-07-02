import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SvgFromUri } from "react-native-svg";
import { PlantDTO } from "../../dtos/PlantDTO";

import WaterdropSvg from "../../assets/waterdrop.svg";
import {
  Container,
  Description,
  Header,
  ImageWrapper,
  Name,
  WateringTip,
  Content,
  TipText,
  ContentText,
  RegisterButton,
  ButtonText,
  DateTime,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import { ActivityIndicator, Platform } from "react-native";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { format } from "date-fns";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { PlantProps, savePlant } from "../../libs/storage";

interface PlantSaveParams {
  plant: PlantDTO;
}

export function PlantSave() {
  const theme = useTheme();
  const route = useRoute();
  const { plant } = route.params as PlantSaveParams;

  const { navigate } = useNavigation();

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");
  const [isLoading, setIsLoading] = useState(false);

  function handleChangeTime(
    event: DateTimePickerEvent,
    dateTime: Date | undefined
  ) {
    if (Platform.OS === "android") setShowDatePicker((oldState) => !oldState);

    if (dateTime) setSelectedDateTime(dateTime);
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }

  async function handleRegister() {
    const newPlant: PlantProps = {
      ...plant,
      hourFormatted: format(selectedDateTime, "HH:mm"),
      dateTimeNotification: selectedDateTime,
    };

    setIsLoading(true);

    try {
      await savePlant(newPlant);
      navigate("Success");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <StatusBar />
      <Header>
        <BackButton />
        <ImageWrapper>
          <SvgFromUri uri={plant.photo} height="100%" />
        </ImageWrapper>
        <Name>{plant.name}</Name>
        <Description numberOfLines={2}>{plant.about}</Description>
      </Header>
      <Content>
        <WateringTip>
          <WaterdropSvg width={56} />
          <TipText>{plant.water_tips}</TipText>
        </WateringTip>

        <ContentText>Escolha o melhor horário para ser lembrado:</ContentText>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === "android" && (
          <TouchableOpacity
            onPress={handleOpenDateTimePickerForAndroid}
            activeOpacity={0.7}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderColor: theme.colors.green,
              borderWidth: 2,
              width: "100%",
              borderRadius: 16,
              alignSelf: "center",
              marginTop: 8,
              padding: 8,
            }}
          >
            <MaterialIcons name="alarm" size={32} color={theme.colors.green} />
            <DateTime>{format(selectedDateTime.getTime(), "HH:mm")}</DateTime>
          </TouchableOpacity>
        )}
      </Content>
      <RegisterButton onPress={handleRegister}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <ButtonText>Cadastrar planta</ButtonText>
        )}
      </RegisterButton>
    </Container>
  );
}
