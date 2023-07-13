class HeaderComponent extends React.Component {
    // тут може бути якийсь ще метод
    render() {
        console.log(this.props);
        // this.props.text = 'test'; --->>> Змінювати пропси заборонено!
        const h1 = React.createElement('h1', {}, 'Super Component!');
        const h2 = React.createElement('h2', {title: 'Hi!'}, `Hello, ${this.props.text}`);
        const p = React.createElement('p', {}, 'Super paragraph');

        const article = React.createElement('article', {}, h1, h2, p);

        return article;
    }
}

const component1 = React.createElement(HeaderComponent, {text: 'React'}, 'Text');
const component2 = React.createElement(HeaderComponent, {text: 'JavaScript'});
const parentElement = React.createElement('section', {}, component1, component2);

const root = document.querySelector('#root');

ReactDOM.render(parentElement, root);


