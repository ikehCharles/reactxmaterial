import { Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

interface ButtonUIProp {
  bg?: string;
  color?: string;
}

const StyledButton = styled(Button, {
  name: "StyledButton",
  slot: "wrapper",
})<ButtonUIProp>((props) => ({
  color: props.color ?? props.theme.palette.text.primary,
  backgroundColor: alpha(props.bg ?? props.theme.palette.secondary.main, 0.9),
  "&:hover,&:active,&:focus": {
    backgroundColor: alpha(props.bg ?? props.theme.palette.secondary.main, 1),
  },
  padding: '0 20px',
  borderRadius: 20,
  height: 30,
  fontWeight: 600
}));

export default StyledButton;
