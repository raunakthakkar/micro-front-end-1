//  custom html elements
  class prevButton extends HTMLElement{
    constructor(){
        super();
        console.log(this)
        this.addEventListener('click',()=>alert("called"))
    }
    connectedCallback(){
        console.log(this)
        this.innerHTML=`<button type='button' value='1'>prev</button>`

    }
}
 class nextButton extends HTMLElement{
    connectedCallback(){
        console.log(this)
        this.innerHTML=`<button type='button' value='1'>next</button>`
        this.addEventListener('click',this.increment);
    }
    increment(){
        this.dispatchEvent(new CustomEvent('count:increment',{bubbles:true}))
    }
}
window.customElements.define('prev-button',prevButton);
window.customElements.define('next-button',nextButton);
