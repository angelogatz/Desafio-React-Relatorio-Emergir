
import React from 'react'
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import Main from './components/Main/renderMain';
import { NotesContextProvider } from './context/notesContext';
import { ContentDetailsContextProvider } from './context/ContentDetailsContext';
import { PlantationsContextProvider } from './context/plantationsContext';
import { FarmContextProvider } from './context/farmContext';

function App() {

  const queryClient = new QueryClient();

  

  return (
    <QueryClientProvider client={queryClient}>
      <ContentDetailsContextProvider>
        <FarmContextProvider>
          <PlantationsContextProvider>
            <NotesContextProvider>
              <Main />
            </NotesContextProvider>
          </PlantationsContextProvider>
        </FarmContextProvider>
      </ContentDetailsContextProvider>
    </QueryClientProvider>
  );
}

export default App;
