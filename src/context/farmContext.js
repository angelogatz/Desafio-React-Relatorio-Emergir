import { useQuery } from "react-query";
import { createContext } from "react";
import { fetchData } from "../Query_Fetch/FetchData";
import { justCors } from "../JustCors/justCors";

const token = "379238b5-705c-48bc-b8c9-27e26676b417"

export const FarmContext = createContext()

export const FarmContextProvider = ({children}) => {

    const { data: plotsRainFall, isLoading: farmContextIsLoading, isError: farmContextError } = useQuery("farm", () => fetchData(`${justCors}https://farmbox.cc/api/public/technical_visit_report/farm.json?token=${token}`), { refetchIntervalInBackground: true, refetchInterval: 60000 });

    return (
        <FarmContext.Provider value={{plotsRainFall, farmContextIsLoading, farmContextError}}>
            {children}
        </FarmContext.Provider>
    )
}
