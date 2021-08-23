import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { RNCamera } from 'react-native-camera'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={{ flex: 1, alignItems: 'center' }}
          captureAudio={false}
          ref={ref => {
            this.camera = ref
          }}
        />
        <Button
          onPress={async () => {
            // not to being spammed.
            // if (takingPic) {
            //   return;
            // }
            //onPicTaken(true);
            try {
              const options = {quality: 0.5, base64: true};
              const data = await this.camera.takePictureAsync(options);
              console.log(data.uri);
            } catch (err) {
              console.log(err);
              //this.camera.pausePreview();
              //this.camera.resumePreview();
            }
          }}
          title="Take pic!"
          color="#841584"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  }
})

export default App
