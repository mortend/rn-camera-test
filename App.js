import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { RNCamera } from 'react-native-camera'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          cameraId={"1"}
          style={{ flex: 1, alignItems: 'center' }}
          captureAudio={false}
          ref={ref => {
            this.camera = ref
          }}
        />
        <Button
          onPress={async () => {
            this.camera.getCameraIdsAsync().then(ids => {
              for (let i = 0; i < ids.length; i++)
                console.log(ids[i].id, ids[i].type, ids[i].deviceType)
            })

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
