"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid2 from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    marital: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match", {
        style: { background: "#171C33", color: "#fff" },
      });
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters", {
        style: { background: "#171C33", color: "#fff" },
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Registration failed");

      toast.success("Registration successful! Redirecting...", {
        style: { background: "#171C33", color: "#fff" },
      });

      setTimeout(() => {
        router.push("/account/login");
      }, 5000);
    } catch (err: any) {
      toast.error(err.message || "Registration failed", {
        style: { background: "#171C33", color: "#fff" },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
       <ToastContainer position="top-center" autoClose={5000} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={4}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "inter",
            fontWeight: 600,
            color: "#171C33",
            textAlign: "center",
            mb: 3,
          }}
        >
          Create Your Account
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ width: "100%", maxWidth: 800 }}
        >
          <Grid2 container spacing={2}>
            {/* First Name */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </Grid2>

            {/* Last Name */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </Grid2>

            {/* Gender */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  label="Gender"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  required
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid2>

            {/* Marital Status */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Marital Status</InputLabel>
                <Select
                  name="marital"
                  value={formData.marital}
                  label="Marital Status"
                  onChange={(e) =>
                    setFormData({ ...formData, marital: e.target.value })
                  }
                >
                  <MenuItem value="single">Single</MenuItem>
                  <MenuItem value="married">Married</MenuItem>
                  <MenuItem value="divorced">Divorced</MenuItem>
                </Select>
              </FormControl>
            </Grid2>

            {/* Date of Birth */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </Grid2>

            {/* Email */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </Grid2>

            {/* Phone */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </Grid2>

            {/* Address */}
            <Grid2 size={12}>
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                multiline
                rows={3}
              />
            </Grid2>

            {/* Password */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                label="Password (min 8 characters)"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid2>

            {/* Confirm Password */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid2>
          </Grid2>

          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading}
              sx={{
                backgroundColor: "#FDCB6D",
                color: "#000",
                "&:hover": { backgroundColor: "#171C33", color: "#fff" },
                textTransform: "none",
                width: { xs: "100%", md: "50%" },
                height: 48,
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: "none",
              }}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" mt={3} mb={4}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Already have an account?{" "}
            <Link
              href="/account/login"
              style={{
                textDecoration: "none",
                color: "#1976d2",
                fontWeight: 600,
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#115293")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1976d2")}
            >
              Sign In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
