class HeaderComponent extends React.Component {
    // тут може бути якийсь ще метод
    render() {
        const h1 = React.createElement('h1', {}, 'Super Component!');
        const h2 = React.createElement('h2', {title: 'Hi!'}, 'Header');
        const p = React.createElement('p', {}, 'Super paragraph');

        const article = React.createElement('article', {}, h1, h2, p);
        
        return article;
    }
}

const component = React.createElement(HeaderComponent);

const root = document.querySelector('#root');

ReactDOM.render(component, root);