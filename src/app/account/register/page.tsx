"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Link from "next/link";

const RegisterPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      router.push("/account/verify");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={10}
      >
  
        <Typography
          fontFamily={"inter"}
          fontSize={30}
          fontWeight={600}
          color="#171C33"
        >
          Tickect App Create Account
        </Typography>
      </Box>
    
     
      <Box component="form" noValidate onSubmit={handleSubmit}>
     

        <Box display="flex" justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            sx={{
              backgroundColor: "#FDCB6D",
              color: "#000",
              "&:hover": { backgroundColor: "#171C33", color: "#fff" },
              textTransform: "none",
              mt: 2,
              width: "50%",
              height: 35,
            }}
          >
            {isLoading ? "Logging in..." : "Register"}
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" gap={2} mt={5}>
        <Typography variant="body2">
          I have Account?{" "}
          <Link
            href="/account/register/"
            style={{
              textDecoration: "none",
              color: "blue",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "blue")}
          >
            Sign In
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterPage;
