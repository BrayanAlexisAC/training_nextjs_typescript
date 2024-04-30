import { createElement } from "react"

export function RandomFox(): JSX.Element {
  const randomNumber = ():number => Math.floor(Math.random() * 123) + 1;
  const image:string = `https://randomfox.ca/images/${randomNumber()}.jpg`;

  return createElement(
    'div',
    {className: 'rounded-md'},
    <img src={image} width='400px' aspect-ratio='1/1'/>
  )

}
