export const copyText = (e) => {
    const copyText = e.target.innerText;
    navigator.clipboard.writeText(copyText);
}