import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        PBLS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ContactUs() {
  const [noDetails, setNoDetails] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var fullname = data.get("fullname");
    var email = data.get("email");
    var contactno = data.get("contactno");
    var message = data.get("message");

    if (fullname && contactno && message) {
      setNoDetails(false);
      var url =
        "https://wa.me/917618995481?text=" +
        "Name: " +
        fullname +
        "%0a" +
        "Phone: " +
        contactno +
        "%0a" +
        "Email: " +
        email +
        "%0a" +
        "Message: " +
        message;

      window.open(url, "_blank").focus();
    } else {
      setNoDetails(true);
      return;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 70,
              fontFamily: "cursive",
              fontWeight: "900",
            }}
            color={"#DE3163"}
            component="h1"
            variant="h5"
          >
            Contact us
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactno"
                  label="Contact Number"
                  name="contactno"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  type="text"
                  id="message"
                  multiline
                  minRows={5}
                />
              </Grid>
            </Grid>
            {noDetails && (
              <p
                className="h5 text-center mt-4"
                style={{ textAlign: "center", color: "red" }}
              >
                Please provide all the details.
              </p>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#DE3163" }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
