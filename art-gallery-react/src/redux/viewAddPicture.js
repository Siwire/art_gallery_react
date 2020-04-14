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
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Divider } from '@material-ui/core';
import { fetchUploadPicture, setFieldValueAction } from './pictureActions'
const url = 'http://localhost:8000';


function AddPicture({ filter, fetchFilters, pictureInfo, fetchUploadPicture, setFieldValueAction }) {
    const { filters } = filter;

    useEffect(() => {
        fetchFilters();
    }, []);
    console.log(pictureInfo, 111111111);

    const [addSizeValue, setSizeValue] = React.useState('');
    const [addStyleValue, setStyleValue] = React.useState('');
    const [addColorValue, setColorValue] = React.useState('');
    //const [filePicture, setFilePicture] = React.useState({file: null})


    const [name, setName] = React.useState('');
    const radioAddSize = (event) => {
        setSizeValue(event.target.value)
    }
    const radioAddStyle = (event) => {
        setStyleValue(event.target.value)
    }
    const radioAddColor = (event) => {
        setColorValue(event.target.value)
    }
    const inputName = (event) => {
        setName(event.target.value);
    };

    const setFieldValue = (event) => {
        console.log(event.target.name);
        if (event.target.files && event.target.files[0]) {
            setFieldValueAction(event.target.name, event.target.files[0]);
        } else {
            setFieldValueAction(event.target.name, event.target.value);
        }
    }

    /*const dropUploadFile = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0], 'sadasdsaddsa');
            setFilePicture({file: e.target.files[0]} )
            console.log(filePicture, 'sadasdsaddsa');
        }
       
        
    }*/

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        // const data = e.target.files[0];
        fetchUploadPicture(pictureInfo);
    }

    const useStyles = makeStyles(() => ({
        window: {
            backgroundColor: '#666666',
            margin: 30
        },
        parametres: {
            margin: 30
        }
    }));
    const classes = useStyles();
    return (
        <Grid container spacing={0} justify="center" className={classes.window}>
            <form onSubmit={onFormSubmit}>
                <Grid container spacing={0} justify="center">
                    <Grid className={classes.parametres}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Input name picture</InputLabel>
                            <OutlinedInput id="component-outlined" value={pictureInfo._id} name='title' onChange={setFieldValue} label="Name" />
                        </FormControl>
                    </Grid>
                    <Grid className={classes.parametres}>

                        <input
                            accept=".jpg, .png"
                            id="raised-button-file"
                            type="file"
                            name="file"
                            onChange={setFieldValue}
                        />

                    </Grid>
                    <Grid className={classes.parametres} >
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Size</FormLabel>
                            <RadioGroup aria-label="size" name="size" value={pictureInfo.size} onChange={setFieldValue} >
                                {filters.sizes && filters.sizes.map(size => (
                                    < FormControlLabel key={size._id} value={size._id} control={<Radio />} label={size.name} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid className={classes.parametres}>
                        <FormControl component="fieldset" item xs={4}>
                            <FormLabel component="legend">Style</FormLabel>
                            <RadioGroup aria-label="style" name="style" value={pictureInfo.style} onChange={setFieldValue} >
                                {filters.styles && filters.styles.map(style => (
                                    < FormControlLabel key={style._id} value={style._id} control={<Radio />} label={style.name} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid className={classes.parametres} >
                        <FormControl component="fieldset" item xs={4}>
                            <FormLabel component="legend">Color</FormLabel>
                            <RadioGroup aria-label="color" name="color" value={pictureInfo.color} onChange={setFieldValue} >
                                {filters.colors && filters.colors.map(color => (
                                    < FormControlLabel key={color._id} value={color._id} control={<Radio />} label={color.name} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid className={classes.parametres}>
                        <Button type='submit' variant="contained" >Send </Button>
                    </Grid>
                </Grid>
            </form>

        </Grid>
    )
}
const mapStateToProps = state => {
    return {
        filter: state.filter,
        pictureInfo: state.picture.pictureInfo
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchFilters: () => dispatch(fetchFilters()),
        fetchUploadPicture: (data) => dispatch(fetchUploadPicture(data)),
        setFieldValueAction: (target, value) => dispatch(setFieldValueAction(target, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
