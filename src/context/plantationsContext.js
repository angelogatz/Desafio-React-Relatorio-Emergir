import { useQuery } from "react-query";
import { createContext } from "react";
import { fetchData } from "../Query_Fetch/FetchData";
import { justCors } from "../JustCors/justCors";

const token = "379238b5-705c-48bc-b8c9-27e26676b417"

export const PlantationsContext = createContext()

export const PlantationsContextProvider = ({children}) => {

    const url = `${justCors}https://farmbox.cc/api/public/technical_visit_report/plantations.json?token=${token}`    

    const { data: dataPlantations, isLoading: plantationsContextIsLoading, isError: plantationsContextError } = useQuery("plantations", () => fetchData(url), { refetchIntervalInBackground: true, refetchInterval: 60000 });

    return (
        <PlantationsContext.Provider value={{dataPlantations, plantationsContextError, plantationsContextIsLoading}}>
            {children}
        </PlantationsContext.Provider>
    )
}