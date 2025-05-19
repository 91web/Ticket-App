"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
  //const isFormValid = isEmailValid && isPasswordValid;


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmailValid) {
      toast.error("Please provide a valid email", { style: { background: "#171C33", color: "#fff" } });
    }
    if (!isPasswordValid) {
      toast.error("Password must be at least 8 characters long and include uppercase, lowercase, number and special character", { style: { background: "#171C33", color: "#fff" } });
    }
    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      toast.success("Successfully logged in!", {
        style: { background: "#171C33", color: "#fff" },
        onClose: () => router.push("/dashboard/user"), // Redirect after toast closes
      });
      console.log("API Response:", data);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unknown error occurred",
        { style: { background: "#171c33", color: "#fff" } }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <ToastContainer position="top-center" autoClose={5000} />
      <Container maxWidth="md">
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
            Ticket App Login Page
          </Typography>
          <Box>
            <Box
              component={"form"}
              onSubmit={handleSubmit}
              style={{ width: "100%" }}
            >
              <Box>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" gap={2} mt={2}>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Remember Me"
                  />
                </Box>
                <Box>
                  <Typography fontFamily={"inter"}>
                    <Link
                      href="/account/forgot-password/"
                      style={{
                        textDecoration: "none",
                        color: "blue",
                        transition: "color 0.3s",
                        fontSize: 12,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "red")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "blue")
                      }
                    >
                      Forgot Password?
                    </Link>
                  </Typography>
                </Box>
              </Box>
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
                  {isLoading ? "Logging in..." : "Sign In"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" gap={2} mt={5}>
          <Typography variant="body2">
            Don&apos;t have Account?{" "}
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
              Register
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
