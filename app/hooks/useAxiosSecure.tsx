"use client";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://localhost:5000.app",
  withCredentials: true,
});

export default function UseAxiosSecure() {
  return axiosSecure;
}