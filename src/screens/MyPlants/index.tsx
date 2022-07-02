import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import WaterdropSvg from "../../assets/waterdrop.svg";
import { Loading } from "../../components/Loading";
import { PlantCardSecondary } from "../../components/PlantCardSecondary";
import {
  getSavedPlants,
  PlantProps,
  removePlantById,
} from "../../libs/storage";

import {
  Container,
  Content,
  Header,
  HeaderTitle,
  MyPlantsList,
  Subtitle,
  Text,
  TipText,
  Title,
  UserProfile,
  WateringTip,
} from "./styles";

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [isLoadingPlants, setIsLoadingPlants] = useState(true);

  async function loadCurrentPlants() {
    try {
      const plants = await getSavedPlants();
      setMyPlants(plants);
      setIsLoadingPlants(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadCurrentPlants();
  }, []);

  async function handleRemove(plant: PlantProps) {
    Alert.alert("Remover", `Deseja remover a ${plant.name}?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: async () => {
          try {
            await removePlantById(String(plant.id));

            setMyPlants((oldPlants) =>
              oldPlants.filter((item) => item.id !== plant.id)
            );
          } catch (error) {
            console.error(error);
          }
        },
      },
    ]);
  }

  useFocusEffect(
    useCallback(() => {
      loadCurrentPlants();
    }, [])
  );

  if (isLoadingPlants) return <Loading />;

  return (
    <Container>
      <StatusBar />
      <Header>
        <HeaderTitle>
          <Text>Minhas</Text>
          <Title>Plantinhas</Title>
        </HeaderTitle>
        <UserProfile
          source={{
            uri: "https://avatars.githubusercontent.com/u/63938494?v=4",
          }}
        />
      </Header>
      <Content>
        <WateringTip>
          <WaterdropSvg width={56} />
          <TipText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            itaque.
          </TipText>
        </WateringTip>

        <Subtitle>Próximas regadas</Subtitle>

        <MyPlantsList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              plant={item}
              onRemove={() => handleRemove(item)}
            />
          )}
        />
      </Content>
    </Container>
  );
}
