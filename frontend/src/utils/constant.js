const isDevelopment = window.location.hostname === 'localhost';

const BASE_URL = isDevelopment
  ? "http://localhost:8080/api/v1"
  : "https://hirevibe.onrender.com/api/v1";

export const USER_API_END_POINT = `${BASE_URL}/user`;
export const JOB_API_END_POINT = `${BASE_URL}/job`;
export const APPLICATION_API_END_POINT = `${BASE_URL}/application`;
export const COMPANY_API_END_POINT = `${BASE_URL}/company`;
