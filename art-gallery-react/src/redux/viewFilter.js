import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFilters } from './filterAction';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function RadioFilter({ filter, fetchFilters }) {
    const { filters } = filter;

    useEffect(() => {
        fetchFilters();
    }, []);
    console.log(filters.sizes, '0000000000000000000000000000000000')
    /*function filterArray(filters) {
        let filtersarray = []
        for (let filt in filters) {
            console.log(filters[filt], 'adsfadsfasdfadfdadfadfadfadsfadf')
            filtersarray.push({ [filt]: filters[filt] })
        }
        return filtersarray
    }
    const filtersArray = filterArray(filters)*/


    return (
        <Grid container spacing={0}>
            <Grid item xs={4}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Size</FormLabel>
                    <RadioGroup aria-label="size" name="size" value='size' >
                        {filters.sizes && filters.sizes.map(size => (
                            < FormControlLabel value={size.name} control={<Radio />} label={size.name} />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl component="fieldset" item xs={4}>
                    <FormLabel component="legend">Style</FormLabel>
                    <RadioGroup aria-label="style" name="style" value='style' >
                        {filters.styles && filters.styles.map(style => (
                            < FormControlLabel value={style.name} control={<Radio />} label={style.name} />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl component="fieldset" item xs={4}>
                    <FormLabel component="legend">Color</FormLabel>
                    <RadioGroup aria-label="color" name="color" value='color' >
                        {filters.colors && filters.colors.map(color => (
                            < FormControlLabel value={color.name} control={<Radio />} label={color.name} />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Grid>
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
        fetchFilters: () => dispatch(fetchFilters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioFilter);

