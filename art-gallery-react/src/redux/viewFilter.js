import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchFilters } from './filterAction';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {changeSizeFilterValue} from './filterAction'
import {changeStyleFilterValue} from './filterAction'
import {changeColorFilterValue} from './filterAction'
import {clearFilterValue} from './filterAction'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    color: {
        backgroundColor: '#666666'
    }
}));

function RadioFilter({ filter, fetchFilters, changeSizeFilter, changeStyleFilter, changeColorFilter, clearFilters }) {
    const { filters } = filter;
    const { sizeValue } = filter;
    const { styleValue } = filter;
    const { colorValue } = filter;
    useEffect(() => {
        fetchFilters();
    }, []);
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    

    const radioChangeSize = (event) => {
        changeSizeFilter(event.target.value)
    }
    const radioChangeStyle = (event) => {
        changeStyleFilter(event.target.value)
    }
    const radioChangeColor = (event) => {
        changeColorFilter(event.target.value)
    }
    const clearFilterValueHandler = () => {
        console.log('here');
        clearFilters();
    }
    return (
        <Grid container spacing={0} >
            <ExpansionPanel className={classes.root} expanded={expanded === 'filter'} onChange={handleChange('filter')} >
                <ExpansionPanelSummary className={classes.color}>
                    <Button variant="contained">Filter</Button>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.color}>
                <Grid container spacing={2} justify="space-between">
                    <Grid item >
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Size</FormLabel>
                            <RadioGroup aria-label="size" name="size" value={sizeValue} onChange={radioChangeSize} >
                                {filters.sizes && filters.sizes.map(size => (
                                    < FormControlLabel value={size._id} control={<Radio />} label={size.name} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" item xs={4}>
                            <FormLabel component="legend">Style</FormLabel>
                            <RadioGroup aria-label="style" name="style" value='style' value={styleValue} onChange={radioChangeStyle} >
                                {filters.styles && filters.styles.map(style => (
                                    < FormControlLabel value={style.name} control={<Radio />} label={style.name} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item >
                        <FormControl component="fieldset" item xs={4}>
                            <FormLabel component="legend">Color</FormLabel>
                            <RadioGroup aria-label="color" name="color" value='color' value={colorValue} onChange={radioChangeColor} >
                                {filters.colors && filters.colors.map(color => (
                                    < FormControlLabel value={color.name} control={<Radio />} label={color.name} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <Button variant="contained" onClick={clearFilterValueHandler}>Clear</Button>
                    </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
    )
}
const mapStateToProps = state => {
    console.log(state, 'state');
    
    return {
        filter: state.filter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchFilters: () => dispatch(fetchFilters()),
        changeSizeFilter: (newValue) => dispatch(changeSizeFilterValue(newValue)),
        changeStyleFilter: (newValue) => dispatch(changeStyleFilterValue(newValue)),
        changeColorFilter: (newValue) => dispatch(changeColorFilterValue(newValue)),
        clearFilters: () => dispatch(clearFilterValue())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioFilter);

