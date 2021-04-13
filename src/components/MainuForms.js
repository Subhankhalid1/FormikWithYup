import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function MainuForms() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 style={{color:'ThreeDShadow'}}>Please readout for our organizational terms and conditions.</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >

                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="textSecondary">
                        The click event of the nested action will propagate up and expand the accordion unless
                        you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions2-content"
                    id="additional-actions2-header"
                >

                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="textSecondary">
                        The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.The focus event of the nested action will propagate up and also focus the accordion
                        unless you explicitly stop it.
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                {/* <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions3-content"
                    id="additional-actions3-header"
                > */}
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="I agree to all terms and conditions."
                    />
                {/* </AccordionSummary> */}

            </Accordion>
        </div>
    );
}
