import React from 'react';
import { connect } from 'react-redux';
import { startPoll, stopPoll } from './actions';
import {View, Text, Button, ActivityIndicator} from 'react-native';

const MainComponent = (props) => {
  const { joke, loading, error, startPoll, stopPoll, isPolling } = props;
  return(
    <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>

      {loading ? <ActivityIndicator size={'small'}/> :
      error ? <Text>Something wrong was happened</Text>:
      <Text style={{textAlign: 'center', paddingHorizontal: 20}}>{joke}</Text>}
      
      <Button
        title={isPolling ? 'Stop Poll' : 'Start Poll'}
        color={isPolling && 'red'}
        onPress={isPolling ? stopPoll : startPoll}
      />
    </View>
  )
}

const mapStateToProps = ({joke, loading, error, isPolling}) => ({
  joke, loading, error, isPolling
});

const mapDispatchToProps = {
  startPoll,
  stopPoll
}


export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);

