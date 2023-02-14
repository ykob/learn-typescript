import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
