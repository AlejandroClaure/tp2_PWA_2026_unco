import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../const/routes.js";
//import { useState, useEffect } from "react";
//import { mainData } from "../data/mainData";
//import styles from "./Home.module.css";

function Home() {
  const navigation = useNavigate();
  return (
    <>
    <div className="bg-red-500 text-white p-10">
  FUNCIONA TAILWIND
</div>
      <h1>Details</h1>
      <button
        onClick={() => {
          navigation(Routes.details);
        }}
      >
        "Details"
      </button>
    </>
  );
}
export { Home};