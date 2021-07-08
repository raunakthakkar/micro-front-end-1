class Counter extends HTMLElement{
    #counter=0;
    connectedCallback(){
        this.refresh();
        window.addEventListener('count:increment',this.showCount);
    }
    get count(){
        console.log("logged")
        return this.#counter
    }

    set count(counter){
        if(!isNaN(counter)){
            this.#counter=counter
        }
        return this.#counter
    }
    showCount=()=>{
        console.log("ruanak incremented count",this.count+=1 )
        this.refresh();
    }
    refresh=()=>{
        this.innerHTML=`counter : ${this.#counter}`
    }
    upgrade(){
        alert("called")
    }
}

window.customElements.define('my-counter',Counter)