const root = document.querySelector('#root');
// createElement(type, props, ...childrens)
// type - тип елемента який потрібно створити
// props - налаштування, просто передаємо {}
// ...childrens - дочірні вузли
const h1 = React.createElement('h1', {}, 'Hello, React!');
console.log(h1);
const anotherH1 = document.createElement('h1');
console.dir(anotherH1);

// render(element, container)
// element - який елемент нам потрібно відрендерити
// container - куди нам цей елемент потрібно приапендити
ReactDOM.render(h1, root);

/*

Зареквайріть Реакт і Реакт-ДОМ (скопіюйте посилання CDN з мого коміту), 
створіть елемент і вбудуйте його на сторінку

*/