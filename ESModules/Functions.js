export function label1(attribute){
    const element = document.createElement('label')
    Object.assign(element,attribute)
    return element
}

export function input (attribute){
    const element = document.createElement('input')
    Object.assign(element, attribute)
    return element
}

export function br (){
    const element = document.createElement('br');
    return element;
}

