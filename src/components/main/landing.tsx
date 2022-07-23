import { alpha, Button, useTheme } from "@mui/material";
import Teenage from "../../assets/images/teenage.svg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StyledBG from "../styled/bgStyled";
import StyledButton from "../styled/buttonStyled";
import StyledCard from "../styled/cardStyled";
import StyledIcon from "../styled/iconStyled";
function Landing() {
  const theme = useTheme();
  return (
    <div className="h-[100vh] w-[100vw]">
      <StyledBG>
        <div className="flex flex-wrap">
          <div>
            <h2>Create your Online Academy in minutes</h2>
            <p>
              Share, sell, engage, support and impact your audience/students
              using several Apps in Contentionary
            </p>
            <StyledButton size="large">Join for free</StyledButton>
          </div>
          <div>
            <StyledCard elevation={5} sx={{background: '#fffff'}}>
              <StyledIcon bg="#23BDEE">
                <CalendarMonthIcon />
              </StyledIcon>
            </StyledCard>
            <h2>Create your Online Academy in minutes</h2>
            <p>
              Share, sell, engage, support and impact your audience/students
              using several Apps in Contentionary
            </p>
            <StyledButton>Join for free</StyledButton>
          </div>
        </div>
        <div className="absolute bottom-0 right-40 w-[400px] -z-100">
          <img src={Teenage} alt="Lady" className="w-[100%] h-[100%]" />
        </div>
      </StyledBG>
      <div>Hello World</div>
    </div>
  );
}
export default Landing;
