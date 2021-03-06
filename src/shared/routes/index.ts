import { lazy } from 'react';
import { IRoutes, IRoutesRedirect } from './types';

// Pages
const Leagues = lazy(() => import('~pages/leagues'));
const LeaguesId = lazy(() => import('~pages/leagues/leaguesId'));
const Commands = lazy(() => import('~pages/commands'));
const ComandsId = lazy(() => import('~pages/commands/comandsId'));

export const routes: IRoutes[] = [
  {
    path: '/leagues',
    elements: Leagues,
  },
  {
    path: '/leagues/:id',
    elements: LeaguesId,
  },
  {
    path: '/commands',
    elements: Commands,
  },
  {
    path: '/commands/:id',
    elements: ComandsId,
  },
];

export const routesRedirect: IRoutesRedirect[] = [
  {
    pathFrom: '/',
    pathTo: '/leagues',
  },
];
