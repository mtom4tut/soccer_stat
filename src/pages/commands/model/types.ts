import { IMatchesData } from "~entities/MatchesItem/model/types";

export interface ICommandsData {
  id: number;
  name: string;
  crestUrl: string;
}

export interface ICommands {
  count: number;
  teams: ICommandsData[];
}

export interface ICommandsId {
  count: number;
  matches: IMatchesData[];
}