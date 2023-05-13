import react from "react"
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "../components/home"
import { Dashboard } from "../pages/dashboard"
import { Projetos } from "../pages/projetos"
import { AdicionarProjeto } from "../pages/adicionarProjeto"
import { ListaProjetos } from "../pages/listaProjetos"

export const RouterApp = () => {
    return(
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}>
                 <Route path="/projetos-listados" element={<ListaProjetos />}/>
                 <Route path="/dashboard" element={<Dashboard />}/>
                 <Route path="/gerenciar-projetos" element={<Projetos />}/>
                 <Route path="/adicionar-projeto" element={<AdicionarProjeto />}/>
              </Route>
          </Routes>
        </BrowserRouter>
    )
}