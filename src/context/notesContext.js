import { useQuery } from "react-query";
import { createContext } from "react";
import { fetchData } from "../Query_Fetch/FetchData";

const justCors = "https://justcors.com/tl_db3a908/"
const token = "379238b5-705c-48bc-b8c9-27e26676b417"

export const NotesContext = createContext()

export const NotesContextProvider = ({children}) => {

    const url = `${justCors}https://farmbox.cc/api/public/technical_visit_report/notes.json?token=${token}` 

    const { data: dataNotes, isLoading: notesContextIsLoading, error } = useQuery("notes", () => fetchData(url), { refetchIntervalInBackground: true, refetchInterval: 60000 });

    const notesFarm = [];
    const notesPlantations = [];

    dataNotes?.results.forEach(result => {
        if(result.location_type === "Farm"){
            notesFarm.push(result)
        }
    })

    dataNotes?.results.forEach(result => {
        if(result.location_type === "Plantation"){
            notesPlantations.push(result)
        }
    })

    return (
        <NotesContext.Provider value={{notesFarm, notesPlantations, error, notesContextIsLoading}}>
            {children}
        </NotesContext.Provider>
    )
}


