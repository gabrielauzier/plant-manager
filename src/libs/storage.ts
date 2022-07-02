import { PlantDTO } from "../dtos/PlantDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface PlantProps extends PlantDTO {
  hourFormatted: string;
  dateTimeNotification: Date;
}

interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
  };
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const data = await AsyncStorage.getItem("@plantmanager:plants");
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: { data: plant },
    };

    await AsyncStorage.setItem(
      "@plantmanager:plants",
      JSON.stringify({ ...newPlant, ...oldPlants })
    );
  } catch (error) {
    throw new Error(error as any);
  }
}

export async function getSavedPlants(): Promise<PlantProps[]> {
  try {
    const data = await AsyncStorage.getItem("@plantmanager:plants");
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const currentPlants: PlantProps[] = Object.keys(plants).map((plant) => {
      return { ...plants[plant].data };
    });

    return currentPlants;
  } catch (error) {
    throw new Error(error as any);
  }
}
