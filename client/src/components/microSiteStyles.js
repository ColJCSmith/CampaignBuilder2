import React from 'react';

import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import Image from '../img/main.jpg'; // Import using relative path


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

export default class Home extends React.Component{
    render(){
        return(
            <Paper style={styles.paperContainer}>
                Some text to fill the Paper Component
            </Paper>
        )
    }
}