import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { EnvironmentButton } from "../../components/EnvironmentButton";
import { Loading } from "../../components/Loading";
import { PlantCardPrimary } from "../../components/PlantCardPrimary";
import { PlantDTO } from "../../dtos/PlantDTO";
import { api } from "../../services/api";

import LottieView from "lottie-react-native";
import plantAnimation from "../../assets/plant_idle.json";

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
  Sorry,
  SorryMessage,
} from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

export interface Environment {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [plants, setPlants] = useState<PlantDTO[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantDTO[]>([]);
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState("all");

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const { navigate } = useNavigation();
  const { user } = useAuth();

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

  function handlePlantSelect(plant: PlantDTO) {
    navigate("PlantSave", { plant });
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
      const { data } = await api.get(
        `/plants?_sort=name&_order=asc&_page=${page}&_limit=10`
      );

      if (!data) return setLoading(true);

      if (page > 1) {
        setPlants((oldValue) => [...oldValue, ...data]);
        setFilteredPlants((oldValue) => [...oldValue, ...data]);
      } else {
        setPlants(data);
        setFilteredPlants(data);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  // function handleFetchMore(distance: number) {
  //   if (distance < 1) return;

  //   setLoadingMore(true);
  //   setPage((oldValue) => oldValue + 1);
  //   fetchPlants();
  // }

  useEffect(() => {
    setLoading(true);
    fetchPlants();
    fetchEnvironments();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header>
        <Greetings>
          <GreetingMessage>Olá,</GreetingMessage>
          <Username>{user?.name}</Username>
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
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              isActive={item.key === environmentSelected}
              onPress={() => {
                handleEnvironmentSelect(item.key);
              }}
            />
          )}
        />
      </Environments>

      {filteredPlants.length > 0 ? (
        <PlantList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              name={item.name}
              imageURL={item.photo}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          numColumns={2}
          // onEndReachedThreshold={0.1}
          // onEndReached={({ distanceFromEnd }) =>
          // handleFetchMore(distanceFromEnd)
          // }
          ListFooterComponent={loadingMore ? <ActivityIndicator /> : <></>}
          ListFooterComponentStyle={{ margin: 32 }}
        />
      ) : (
        <Sorry>
          <LottieView
            source={plantAnimation}
            autoPlay
            loop
            style={{ width: 150, height: 150 }}
          />
          <SorryMessage>
            Desculpe, infelizmente ainda não temos sugestão de plantas para o
            local selecionado.
          </SorryMessage>
        </Sorry>
      )}
    </Container>
  );
}
