import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const LATITUDE = 41.0082;
const LONGITUDE = 28.9784;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = 0.1;

export default class App extends Component {

  state = {
    markers: [],
    detail: '',
    title: '',
    description: ''
  }

  onPressHandler(e) {
    const coordinates = e.nativeEvent.coordinate;
    const { markers, title, description } = this.state;

    markers.push({
      id: markers.length,
      coordinates,
      title: title,
      description: description
    })

    this.setState({
      detail: JSON.stringify(coordinates),
      markers
    })
  }

  render() {
    const { markers, detail } = this.state;
    return (
      <View style={styles.container}>
        <MapView style={styles.mapWrapper}
                 initialRegion={{
                   latitude: LATITUDE,
                   longitude: LONGITUDE,
                   latitudeDelta: LATITUDE_DELTA,
                   longitudeDelta: LONGITUDE_DELTA
                 }}
                 provider={PROVIDER_GOOGLE}
                 onPress={this.onPressHandler.bind(this)}>

                {markers.map(marker => {
                  return (
                    <Marker key={marker.id}
                            coordinate={marker.coordinates}
                            title={marker.title}
                            description={marker.description} />
                  )
                })}

        </MapView>
        <View style={styles.detailWrapper}>
          <Text style={{ flex: 1 }}> {detail} </Text>
          <View style={{ flex: 1 }}>
            <TextInput placeholder='Title of Marker'
                       onChangeText={(text) => this.setState({
                         title: text
                       })} />
           <TextInput placeholder='Description of Marker'
                      onChangeText={(text) => this.setState({
                        description: text
                      })} />
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  mapWrapper: {
    ...StyleSheet.absoluteFillObject
  },
  detailWrapper: {
    height: 300,
    width: '90%',
    opacity: 0.7,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 18
  }
});
