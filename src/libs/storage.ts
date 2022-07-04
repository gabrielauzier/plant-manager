import { PlantDTO } from "../dtos/PlantDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

export interface PlantProps extends PlantDTO {
  hourFormatted: string;
  dateTimeNotification: Date;
}

interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
    notificationId: string;
  };
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification);
    const now = new Date();

    const { times, repeat_every } = plant.frequency;

    if (repeat_every === "week") {
      const interval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + interval);
    }
    // else nextTime.setDate(nextTime.getDate() + 1);

    const seconds = Math.abs(
      Math.ceil(now.getTime() - nextTime.getTime()) / 1000
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hey, 🌱",
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: { plant },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: false,
      },
    });

    const data = await AsyncStorage.getItem("@plantmanager:plants");
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: { data: plant, notificationId },
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

export async function removePlantById(id: string): Promise<void> {
  try {
    const data = await AsyncStorage.getItem("@plantmanager:plants");
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    await Notifications.cancelScheduledNotificationAsync(
      plants[id].notificationId
    );
    delete plants[id];

    await AsyncStorage.setItem("@plantmanager:plants", JSON.stringify(plants));
  } catch (error) {
    throw new Error(error as any);
  }
}
