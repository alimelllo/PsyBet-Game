import * as React from "react"

const DiscordComponent = (props : any) => {


  return <svg
    xmlns="http://www.w3.org/2000/svg"
    width={73}
    height={74}
    fill='none'
    {...props}
  >
    <circle 
        cx={36.419} 
        cy={36.774} 
        r={34.419} 
        stroke="#fff" 
        strokeWidth={4} 
    />
    <path
      d="M51.318 24.438c-3.548-2.92-9.16-3.416-9.4-3.433a.882.882 0 0 0-.881.534c-.014.021-.136.31-.272.758 2.347.406 5.23 1.222 7.837 2.878a.924.924 0 0 1 .29 1.254.885.885 0 0 1-.76.434.88.88 0 0 1-.47-.139C43.178 23.88 37.58 23.736 36.5 23.736c-1.08 0-6.681.143-11.162 2.988a.876.876 0 0 1-1.226-.292.924.924 0 0 1 .286-1.257c2.608-1.653 5.49-2.472 7.837-2.874-.136-.452-.258-.737-.268-.762a.877.877 0 0 0-.884-.535c-.24.018-5.853.513-9.45 3.473C19.757 26.254 16 36.639 16 45.617c0 .161.042.314.118.453 2.59 4.659 9.662 5.877 11.274 5.93h.028a.884.884 0 0 0 .72-.374l1.63-2.293c-4.397-1.162-6.643-3.135-6.772-3.252a.923.923 0 0 1-.076-1.286.878.878 0 0 1 1.256-.082c.053.05 4.189 3.64 12.322 3.64 8.147 0 12.283-3.604 12.325-3.64a.878.878 0 0 1 1.257.086.922.922 0 0 1-.08 1.282c-.129.117-2.375 2.09-6.772 3.252l1.63 2.293a.884.884 0 0 0 .72.374h.028c1.612-.053 8.683-1.271 11.274-5.93a.931.931 0 0 0 .118-.452c0-8.979-3.757-19.364-5.682-21.18ZM30.707 41.97c-1.724 0-3.12-1.631-3.12-3.647s1.396-3.647 3.12-3.647c1.723 0 3.12 1.631 3.12 3.647s-1.397 3.647-3.12 3.647Zm11.587 0c-1.724 0-3.12-1.631-3.12-3.647s1.396-3.647 3.12-3.647c1.723 0 3.119 1.631 3.119 3.647s-1.396 3.647-3.12 3.647Z"
      fill="#fff" 
    />
  </svg>
}

export default DiscordComponent