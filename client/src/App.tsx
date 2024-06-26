import { QueryClient } from "@tanstack/query-core";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/AppLayout";
import Programs from "./pages/Programs";
import CurriculumData from "./pages/CurriculumData";
import StudentPortfolio from "./pages/StudentPortfolio";


function App() {

  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 100,
        gcTime: 1000 * 60 * 60 * 24,
      }
    }
  });

  const persister = createSyncStoragePersister({
    storage: sessionStorage,
  });

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister}}
    >
      <ReactQueryDevtools initialIsOpen={false}/>
      <GlobalStyles/>
       <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
          <Route index element={<Navigate replace to="programs"/>}/>
          <Route element={<Programs/>} path="programs"/>
          <Route element={<CurriculumData/>} path="curriculum-data"/>
          <Route element={<StudentPortfolio/>} path="student-portfolio"/>
          
          </Route>
          
          <Route path="login" element={<Login />}/>
        </Routes>
       </BrowserRouter>

       <Toaster
  position="top-center"
  gutter={12}
  containerStyle={{margin: "10px"}}
  toastOptions={{
    success: {
      duration: 3000,
      style: {
        backgroundColor: "var(--color-green-0)",
        color: "var(--color-green-1)",
      },
    },
    error: {
      duration: 5000,
      style:{
        backgroundColor: "var(--color-red-2)",
        color: "var(--color-red-3)",
      },
    },
    style:{
      fontSize: "16px",
      maxWidth: "500px",
      padding: "16px 24px",
      fontWeight: "600",
    }
  }}
/>

    </PersistQueryClientProvider>
  )
}

export default App


