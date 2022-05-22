import { useQuery } from "react-query";
import { createContext } from "react";
import { fetchData } from "../Query_Fetch/FetchData";

const justCors = "https://justcors.com/tl_db3a908/"
const token = "379238b5-705c-48bc-b8c9-27e26676b417"

export const ContentDetailsContext = createContext()

export const ContentDetailsContextProvider = ({children}) => {

    const { data: dataContentDetails, isLoading: contentDetailsIsLoading, error } = useQuery("contentDetails", () => fetchData(`${justCors}https://farmbox.cc/api/public/content_details.json?token=${token}`), { refetchIntervalInBackground: true, refetchInterval: 60000 });

    return (
        <ContentDetailsContext.Provider value={{dataContentDetails, error, contentDetailsIsLoading}}>
            {children}
        </ContentDetailsContext.Provider>
    )
}

