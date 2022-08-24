import * as React from "react"

const InstagramComponent = (props : any) => {
  return  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={73}
  height={74}
  fill="none"
  {...props}
>
  <circle cx={36.419} cy={37.097} r={34.419} stroke="#fff" strokeWidth={4} />
  <path
    d="M28.5 18C22.166 18 17 23.166 17 29.5v15C17 50.833 22.166 56 28.5 56h15C49.833 56 55 50.833 55 44.5v-15C55 23.166 49.833 18 43.5 18h-15Zm0 3h15c4.711 0 8.5 3.788 8.5 8.5v15c0 4.711-3.789 8.5-8.5 8.5h-15a8.478 8.478 0 0 1-8.5-8.5v-15c0-4.712 3.788-8.5 8.5-8.5ZM46 25a2 2 0 1 0-.001 3.999A2 2 0 0 0 46 25Zm-10 2c-5.505 0-10 4.495-10 10s4.495 10 10 10 10-4.495 10-10-4.495-10-10-10Zm0 3c3.883 0 7 3.117 7 7s-3.117 7-7 7-7-3.117-7-7 3.117-7 7-7Z"
    fill="#fff"
  />
</svg>
}

export default InstagramComponent
