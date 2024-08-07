import { Container, Grid } from "@mui/material";
import { AboutResume } from "../components/DataComponents/AboutResume";
import EducationResume from "../components/DataComponents/EducationResume";
import SkillsResume from "../components/DataComponents/SkillsResume";
import WorkExperienceResume from "../components/DataComponents/WorkExperienceResume";

export default function Resume() {
  return (
    <Container>
      <AboutResume />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <EducationResume />
        </Grid>
        <Grid item xs={12} md={5}>
          <SkillsResume />
        </Grid>
      </Grid>
      <WorkExperienceResume />
    </Container>
  );
}
/**TODO:
 * 1. Fix the font sizes for list items
 * 2. Fix the gap in SkillsResume list items
 * 3. fix education and skills card to be even at bottom
 * 4. Fix hamburger menu to be on the right side
 * 5. Fix skills list on home page to not overlap when screen shrinks
 * 6. Implement new header links and fix the hamburger menu links to work for the entire button rather than just the text
 * 7. Fix the Footer content: needs to move left for even spacing in margins, and the footer needs to be the entire width of container
 * 8. Add Calendly to Schedule a meeting button
 * 9. Make skills into a button that links to their generic webpage, IE: React will link to the React dev webpage
 */
