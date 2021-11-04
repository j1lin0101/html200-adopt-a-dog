const mainBody = document.getElementById('main-content');

const posts = [
    {
        title: 'Travelling with Your Dog',
        image: 'images/blog-1-cropped.jpg',
        imageAlt: 'Image of a dog owner with her dog staring at a canyon',
        text1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        text2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
        title: 'How To Walk Multiple Dogs',
        image: 'images/blog-2-cropped.jpg',
        imageAlt: 'Image of four dogs sitting in the park',
        text1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        text2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    },
    {
        title: 'Teach Your Dog to Fetch!',
        imageAlt: 'Silouhette of a dog owner playing fetch with her dog in the sunset',
        image: 'images/blog-3-cropped.jpg',
        text1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
        text2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
    }
];

for (let i = 0; i < posts.length; i += 1) {
    const post = posts[i];

    const section = document.createElement('section');
    section.setAttribute('class', 'blog-article');

    const header = document.createElement('h3');
    header.textContent = post.title;

    const image = document.createElement('img');
    image.setAttribute('src', post.image);
    image.setAttribute('alt', post.imageAlt);

    const article = document.createElement('article');


    const p1 = document.createElement('p');
    p1.textContent = post.text1;

    const p2 = document.createElement('p');
    p2.textContent = post.text2;

    section.appendChild(image);
    section.appendChild(article);
    article.appendChild(header);
    article.appendChild(p1);
    article.appendChild(p2);

    mainBody.appendChild(section);
}