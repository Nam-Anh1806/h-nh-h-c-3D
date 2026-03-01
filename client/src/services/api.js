'use strict';

const axios = require('axios');

const API_URL = 'https://api.example.com'; // Replace with your API URL

const apiClient = axios.create({
    baseURL: API_URL,
    timeout: 1000,
});

module.exports = apiClient;
