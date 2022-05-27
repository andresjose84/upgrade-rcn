import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ArrowScreen } from '../components/ArrowScreen';
import { DestrutureScreen } from '../components/DestrutureScreen';
import { IndexScreen } from '../components/IndexScreen';
import { SpreadScreen } from '../components/SpreadScreen';
import { VarsScreen } from '../components/VarsScreen';
import { ReactScreen } from '../components/ReactScreen';
import { EstructureScreen } from '../components/EstructureScreen';
import { RafcScreen } from '../components/RafcScreen';
import { HooksScreen } from '../components/HooksScreen';
import { ExplScreen } from '../components/ExplScreen';
import { BuildScreen } from '../components/BuildScreen';
import { UseStateScreen } from '../components/UseStateScreen';
import { UseEfectScreen } from '../components/UseEfectScreen';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <IndexScreen /> } />
        <Route path="/vars" element={ <VarsScreen /> } />
        <Route path="/destruture" element={ <DestrutureScreen /> } />
        <Route path="/spread" element={ <SpreadScreen /> } />
        <Route path="/arrow" element={ <ArrowScreen /> } />
        <Route path="/react" element={ <ReactScreen /> } />
        <Route path="/estructure" element={ <EstructureScreen /> } />
        <Route path="/rafc" element={ <RafcScreen /> } />
        <Route path="/hooks" element={ <HooksScreen /> } />
        <Route path="/expl" element={ <ExplScreen /> } />
        <Route path="/build" element={ <BuildScreen /> } />
        <Route path="/usestate" element={ <UseStateScreen /> } />
        <Route path="/useefect" element={ <UseEfectScreen /> } />
      </Routes>
    </BrowserRouter>
  )
}
