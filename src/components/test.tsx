'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

import logo from "@/images/ratekl_logo_header.png";
import { useEffect, useState } from "react";
import { loadApp } from "@/services/app.service";

const Test = ({domain}: {domain: string}) => {
  const [state, setState] = useState('');

  useEffect(() => {
    (async () => {
      const appInfo = await loadApp(domain);
      setState(JSON.stringify(appInfo));
    })();
  },[domain]);

  return (
    <div >
      <div >
        Hello {state}
      </div>
    </div>
  );
};

export default Test;
