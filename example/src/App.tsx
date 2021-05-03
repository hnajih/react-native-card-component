import * as React from 'react';

import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import Card from 'react-native-card-component';
import { Button, IconButton } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Thumbnail
          source={{ uri: 'https://picsum.photos/200' }}
          style={{ height: 200, width: 300 }}
          align={'center'}
          // stretch
          // imageProps={{resizeMode: 'contain'}}
          containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        />
        <Card.Content>
          <Card.Title
            text={'Ex Lorem magna sint labore ex commodo dolor minim ad.'}
          />
          <Card.Row>
            <Card.Col>
              <Button mode={'outlined'}>demo</Button>
            </Card.Col>
            <Card.Col>
              <Button mode={'contained'}>demo</Button>
            </Card.Col>
          </Card.Row>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
