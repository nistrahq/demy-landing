export function getElement(id) {
    const el = document.getElementById(id);
    if (!el) {
        console.warn(`Element with id ${id} not found`);
    }
    return el;
}