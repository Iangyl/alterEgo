import INews from 'lib/INews.types';

export interface ISession {
  status: 'active' | 'inactive' | 'stopped';
  accessStatus: 'open' | 'closed';
}

export interface IState {
  news: INews[];
  session: ISession;
}
