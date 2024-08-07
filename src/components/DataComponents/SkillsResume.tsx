import {
  Card,
  CardContent,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import SkillsResumeComponent from "./SkillsResumeComponent";
import { resume } from "../../data/resume";
import CircleIcon from "@mui/icons-material/Circle";

export default function SkillsResume() {
  const { palette } = useTheme();
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h3"
          sx={{ color: palette.secondary.dark, textTransform: "capitalize" }}
        >
          Skills
        </Typography>
        <Grid container spacing={2}>
          {resume.skills.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon
                    sx={{ color: palette.secondary.light, fontSize: "6px" }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <SkillsResumeComponent skill={item} />
                </ListItemText>
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
