import { Box, Button, Card, Container, Paper } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

interface ButtonUIProp {
  bg: string;
}

const StyledIcon = styled(Paper, {
  name: "StyledIcon",
  slot: "wrapper",
})<ButtonUIProp>((props) => ({
  backgroundColor: props.bg,
  borderRadius: 5,
}));

export default StyledIcon;
