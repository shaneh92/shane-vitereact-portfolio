import { Button, Link, Typography, useTheme } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface HeaderLinkItemProps {
  to: string;
  title: string;
  disabled?: boolean;
}

export default function HeaderLinkItem(props: HeaderLinkItemProps) {
  const location = useLocation();
  const currentPath = location.pathname || "/";
  const { palette } = useTheme();

  return (
    <Link
      component={RouterLink}
      to={props.to}
      underline="none"
      sx={{
        pointerEvents: props.disabled ? "none" : "auto",
        cursor: props.disabled ? "not-allowed" : "pointer",
      }}
    >
      <Button
        variant="text"
        sx={{
          "&:hover": {
            backgroundColor: palette.secondary.main,
          },
        }}
      >
        <Typography
          textAlign="center"
          variant="h4"
          sx={{
            fontWeight: 600,
            color:
              currentPath === props.to
                ? palette.secondary.dark
                : palette.secondary.light,
          }}
        >
          {props.title}
        </Typography>
      </Button>
    </Link>
  );
}
