import axios, { AxiosInstance } from 'axios';
import { v4 as uuid } from 'uuid';
import type { User } from '../users/user';

const createButton: HTMLButtonElement = document.querySelector('#createButton');
const updateButton: HTMLButtonElement = document.querySelector('#updateButton');
const firstNameText: HTMLInputElement = document.querySelector('#firstName');
const lastNameText: HTMLInputElement = document.querySelector('#lastName');
const idText: HTMLInputElement = document.querySelector('#id');

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

createButton.addEventListener('click', async () => {
  const firstName: string = firstNameText.value;
  const lastName: string = lastNameText.value;

  const newUser: User = {
    id: uuid(),
    firstName,
    lastName,
  };

  const user: User = await api.post('/users', newUser);

  console.log(user);
});

updateButton.addEventListener('click', async () => {
  const id: string = idText.value;
  const firstName: string = firstNameText.value;
  const lastName: string = lastNameText.value;

  const updatedUser: User = {
    id: id,
    firstName,
    lastName,
    position: 'Dev',
  };

  const user: User = await api.put(`/users/${id}`, updatedUser);

  console.log(user);
});
