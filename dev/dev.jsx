import {Form} from '../lib';

const MyComponent = React.createClass({
    render() {
      return (
        <h1>Hello, world! <Form /></h1>
      );
    }
});

ReactDOM.render(<MyComponent />, document.getElementById('app'));
