import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page'/>

            <Box sx={{mt: '20px'}}>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            An Importand question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aspernatur repellat laborum, nemo provident error.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Next Importand question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aspernatur repellat laborum, nemo provident error.
                        </Typography>
                    </AccordionDetails>
                </Accordion>


                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Third Importand question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aspernatur repellat laborum, nemo provident error.
                        </Typography>
                    </AccordionDetails>
                </Accordion>


                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Fourth Importand question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aspernatur repellat laborum, nemo provident error.
                        </Typography>
                    </AccordionDetails>
                </Accordion>


                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Sixth Importand question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia aspernatur repellat laborum, nemo provident error.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}

export default FAQ;