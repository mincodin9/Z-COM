"use client";

import Main from "@/app/(beforeLogin)/_component/Main";
import {redirect} from "next/navigation";


export default function Login(){
  redirect('/i/flow/login');
  return (
    <Main />
  );
}