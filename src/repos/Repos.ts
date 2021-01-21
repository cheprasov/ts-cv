import axios from 'axios';

export interface IRepo {
    name: string;
    downloads: number;
}

export interface IRepos {
    total: number;
    repos: IRepo[];
    errors: string[];
}

const URL = 'https://cheprasov.com/cfw/repos-downloads';

export default class Repos {
    static getRepos(): Promise<IRepos> {
        return axios.get<IRepos>(URL).then(response => response.data);
    }
}
