function enviarWhats(event) {

    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5548991721143';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    console.log(url)

    window.open(url, '_blank')
    
}

/* Link ativo de seções de rolagem (Scroll)*/

document.addEventListener("DOMContentLoaded", () => {

    let sections = document.querySelectorAll('section, main');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute("id");

            if (scrollPos >= offset && scrollPos < offset + height) {

                navLinks.forEach(link => link.classList.remove('active'));

                let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            };
        });
    });
});
