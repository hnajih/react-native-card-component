# react-native-card-component

react-native-card-component

## Installation

```sh
npm install react-native-card-component
```

## Usage

```js
import Card from "react-native-card-component";

// ...

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

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
