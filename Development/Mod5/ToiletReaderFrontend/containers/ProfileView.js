import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import InterestContainer from '../containers/InterestContainer'
// import Post from '../components/Post';

class ProfileView extends React.Component {
    render(){
        // console.log(this.props.user)
        return (
            <View>
                <Text style={{fontSize: 20}}>Profile</Text>
                <Text>Username: {this.props.user.username}</Text>
                <Text>Handle: {this.props.user.handle}</Text>
                <InterestContainer user={this.props.user}/>
            </View>
        )
    }
}

export default ProfileView;