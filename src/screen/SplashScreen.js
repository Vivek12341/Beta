import React, { Component } from 'react'
import { StyleSheet, Image, View,Text, Alert , ActivityIndicator} from 'react-native'
import Main from './Main';
import AppNavigator from './AppNavigator';

class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(() => { resolve('result') }, 2000)
        )
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
        if (data !== null) {

            this.setState({ isLoading: false });
        
            this.props.navigation.navigate('Main');
            
        }

    }

    render() {

        // if (this.state.isLoading) {
        //     return <Main />;
        //  }

        return (

            <View style={styles.ViewStyle}>
            <Text>hello</Text>
            <ActivityIndicator size="large" color="#0000ff" />
                {/* <Image style={styles.ImageStyle}>   </Image> */}

            </View>
        )
    }

}

const styles = {

    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    ImageStyle: {
        src: 'white'

    }

}

export default SplashScreen;