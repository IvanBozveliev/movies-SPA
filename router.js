const router = {
    'home': 'home-template',
    'register': 'register-template',
    'login': 'login-template',
}

const routers = (path) =>{
    const app = document.getElementById('app');
    const template = Handlebars.compile(document.getElementById(router[path]).innerHTML);
    app.innerHTML = template();
}

const navigate = (path) =>{
    let url = new URL(path);
    history.pushState({},'',url.pathname);
    routers(url.pathname.slice(1))
}