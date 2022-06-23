import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { EnvironmentButton } from "../../components/EnvironmentButton";
import { PlantCardPrimary } from "../../components/PlantCardPrimary";
import { PlantDTO } from "../../dtos/PlantDTO";
import { api } from "../../services/api";

import {
  Container,
  Greetings,
  GreetingMessage,
  Header,
  Username,
  UserProfile,
  Title,
  Subtitle,
  Environments,
  EnvironmentList,
  PlantList,
  Plants,
} from "./styles";

export interface Environment {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [plants, setPlants] = useState<PlantDTO[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantDTO[]>([]);
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState("");

  function handleEnvironmentSelect(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === "all") {
      setFilteredPlants(plants);
      return;
    }

    setFilteredPlants(
      plants.filter((plant) => plant.environments.includes(environment))
    );
  }

  async function fetchEnvironments() {
    try {
      const { data } = await api.get(
        "/plants_environments?_sort=title&_order=asc"
      );
      setEnvironments([{ key: "all", title: "Todos" }, ...data]);
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchPlants() {
    try {
      const { data } = await api.get("/plants?_sort=name&_order=asc");
      setPlants(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchPlants();
    fetchEnvironments();
  }, []);

  return (
    <Container>
      <Header>
        <Greetings>
          <GreetingMessage>Olá,</GreetingMessage>
          <Username>Gabriel</Username>
        </Greetings>
        <UserProfile
          source={{
            uri: "https://avatars.githubusercontent.com/u/63938494?v=4",
          }}
        />
      </Header>

      <Title>Em qual ambiente </Title>
      <Subtitle>você quer colocar sua planta?</Subtitle>

      <Environments>
        <EnvironmentList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton
              key={item.key}
              title={item.title}
              isActive={item.key === environmentSelected}
              onPress={() => {
                handleEnvironmentSelect(item.key);
              }}
            />
          )}
        />
      </Environments>

      <PlantList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={filteredPlants}
        renderItem={({ item }) => (
          <PlantCardPrimary
            key={item.name}
            name={item.name}
            imageURL={item.photo}
          />
        )}
        numColumns={2}
        ListFooterComponent={<View style={{ margin: 32 }} />}
      />
    </Container>
  );
}
