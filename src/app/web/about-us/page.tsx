import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const AboutUs = () => {
  return (
    <Box className="about-us" sx={{ p: 2 }}>
      <Typography variant="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" >
        Welcome to our website! We are a passionate team dedicated to providing high-quality tutorials and resources for developers of all skill levels.
      </Typography>
      <Typography variant="body1" >
        Our mission is to empower individuals through accessible and practical learning experiences. With years of experience in the tech industry, our team strives to bring you the latest insights, tips, and best practices.
      </Typography>
      <Typography variant="body1">
        Thank you for visiting our site. We hope you find our content both informative and inspiring!
      </Typography>
    </Box>
  )
}

export default AboutUs