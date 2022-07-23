import { Container } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";


const StyledBG = styled(Container, {
    name: "StyledBG",
    slot: "wrapper",
  })((props) => ({
    backgroundColor: alpha(props.theme.palette.secondary.main, 0.1),
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    height: '80vh',
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    zIndex: 10,
    display: 'flex',
    paddingTop: '15vh',
    justifyContent:'space-around',
    margin: 0,
    '@media (min-width: 1200px)':{
        maxWidth: '100%',
    },
    '@media (min-width: 600px)':{
        maxWidth: '100%',
    }
  }));

  export default StyledBG