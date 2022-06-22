declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Welcome: NavigationStackProp<string>;
    UserIdentification: NavigationStackProp<string>;
    Confirmation: NavigationStackProp<string>;
    MyPlants: NavigationStackProp<string>;
    PlantSave: NavigationStackProp<string>;
    PlantSelect: NavigationStackProp<string>;
  }
}
