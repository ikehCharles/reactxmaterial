import { Box, Button, Card, Container, Paper } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";


const StyledCard = styled(Paper, {
  name: "StyledCard",
  slot: "wrapper",
})((props) => ({
  backgroundColor: props.theme.palette.primary.light,
  padding: '10px',
  borderRadius: 5,
}));

export default StyledCard;
