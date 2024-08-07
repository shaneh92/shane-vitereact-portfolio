import { Typography, useTheme } from "@mui/material";

export default function Error() {
  const { palette } = useTheme();
  return (
    <>
      <Typography
        variant="h1"
        align="center"
        sx={{ mt: 10, color: palette.secondary.dark }}
      >
        Uh oh, something went wrong! 404 Page Not Found!
      </Typography>
    </>
  );
}
