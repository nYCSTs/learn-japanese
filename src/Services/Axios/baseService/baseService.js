import axios from 'axios';
import {
  BaseUrlUsers, BaseUrlKanjis,
} from '../../../Constants/baseUrl';

export const APIUsers = axios.create({
  baseURL: BaseUrlUsers,
});

export const APIKanjis = axios.create({
  baseURL: BaseUrlKanjis,
});