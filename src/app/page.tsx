"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppTicketLogo from "../assets/img/ticket-logo.png";
import Image from "next/image";
import { keyframes } from "@emotion/react";

// Define fade keyframes: fade in then out within 10 seconds
const fadeAnimation = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`;

const AppHome = () => {
  const router = useRouter();
  const [typedText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);
    
  const fullText = "Ticket App";

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Navigate to next page after 10 seconds
    const timeout = setTimeout(() => {
      router.push("/web");
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [index, router, fullText]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ animation: `${fadeAnimation} 10s linear` }}>
        <Image
          src={AppTicketLogo}
          alt="Ticket App Logo"
          width={100}
          height={100}
          style={{
            borderRadius: 10,
          }}
        />
      </Box>
    <Typography
      sx={{
        mt: 2,
        color: "#171C33",
        fontFamily: "inter",
        fontSize: { xs: 20, md: 25 },
        fontWeight: 600,
      }}
    >
      {typedText}
    </Typography>
    </Box>
  );
};

export default AppHome;
