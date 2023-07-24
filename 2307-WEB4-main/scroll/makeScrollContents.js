function makeScrollContents(scrollContent) {
    window.addEventListener('scroll', (e) => {
        // -300에 나타나기 시작해서
        // -900에 완전히 나타나게 하고싶다!
        for (let i = 0; i < scrollContent.length; i++) {
            console.log(scrollContent[i].getBoundingClientRect().top - window.innerHeight < 0)
            if (scrollContent[i].getBoundingClientRect().top - window.innerHeight < 0) {
                scrollContent[i].classList.add('active');
            } else {
                scrollContent[i].classList.remove('active');
            }
        }
    })
}