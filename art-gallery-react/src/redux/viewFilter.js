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
import Button from '@material-ui/core/Button';
// import { changeSizeFilterValue } from './filterAction'
// import { changeStyleFilterValue } from './filterAction'
// import { changeColorFilterValue } from './filterAction'
import { clearFilterValue, changeSizeFilterValue, changeStyleFilterValue, changeColorFilterValue, setFilteredPicturesArray } from './filterAction'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    color: {
        backgroundColor: '#666666'
    }
}));

function RadioFilter({ filter, fetchFilters, changeSizeFilter, changeStyleFilter, changeColorFilter, clearFilters, setFilteredPicturesArray }) {
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
        changeSizeFilter(event.target.value);
        setFilteredPicturesArray({ sizeValue: event.target.value, styleValue, colorValue });
    }
    const radioChangeStyle = (event) => {
        changeStyleFilter(event.target.value);
        setFilteredPicturesArray({ sizeValue, styleValue: event.target.value, colorValue });
    }
    const radioChangeColor = (event) => {
        changeColorFilter(event.target.value);
        setFilteredPicturesArray({ sizeValue, styleValue, colorValue: event.target.value });
    }
    const clearFilterValueHandler = () => {
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
                                        < FormControlLabel key={size._id} value={size._id} control={<Radio />} label={size.name} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl component="fieldset" item xs={4}>
                                <FormLabel component="legend">Style</FormLabel>
                                <RadioGroup aria-label="style" name="style" value={styleValue} onChange={radioChangeStyle} >
                                    {filters.styles && filters.styles.map(style => (
                                        < FormControlLabel key={style._id} value={style._id} control={<Radio />} label={style.name} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item >
                            <FormControl component="fieldset" item xs={4}>
                                <FormLabel component="legend">Color</FormLabel>
                                <RadioGroup aria-label="color" name="color" value={colorValue} onChange={radioChangeColor} >
                                    {filters.colors && filters.colors.map(color => (
                                        < FormControlLabel key={color._id} value={color._id} control={<Radio />} label={color.name} />
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
        clearFilters: () => dispatch(clearFilterValue()),
        setFilteredPicturesArray: (filters) => dispatch(setFilteredPicturesArray(filters)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioFilter);

