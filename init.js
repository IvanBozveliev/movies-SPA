function addEventListeners(){

  let headerTemplate =  Handlebars.compile(document.getElementById('navigateTemplate').innerHTML);
    Handlebars.registerPartial('nav-template', headerTemplate)
    navigate('home')
}

function navigateHeaderTemlate(e){
  e.preventDefault();

  if(e.target.localName !== 'a'){
    return;
  }

  navigate(e.target.href)
}

addEventListeners();