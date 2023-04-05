import Head from "next/head";
import { Button, ButtonGroup } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="login-container">
          <div className="login-field">
            <h3 className="Login-tag">Login</h3>
            <div className="login-heading">
              <Image src="/images/logo.svg" width="122" alt="login-logo" />
              <h1>Login to Your Account</h1>
            </div>
            <div className="login-inputs">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                value={email}
              />
              <input
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                type="password"
                placeholder="******"
              />
            </div>
            <Button colorScheme="whatsapp">Login</Button>
          </div>
        </div>
        <div className="login_side-img"></div>
      </div>
    </>
  );
}
