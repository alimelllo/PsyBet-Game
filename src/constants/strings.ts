const strings = {
    HOME_MENUS : [
        {
            href : "#games",
            title : "Games"
        },
        {
            href : "#roadmap",
            title : "Roadmap"
        },
    ],
    LAUNCH_APP: "LAUNCH APP",
    HOME:{
        HEADER: {
            TITLE:`
Let’s make it\n
happen,Try your\n
luck... `,
            DESCRIPTION:`Lorem ipsum dolor sit amet, consectetur \n
 adipiscing elit. Sit elementum cursus vitae \n
 placerat.`
        }
    },
    ROADMAP:{
        TITLE:'Roadmap',
        ITEMS:[
            {
                TITLE:'LAUNCH GAME',
                PROPS:['Battlemode','Smartcontract','Partnetrship'],
                DATE:'22/2/2023',
                IMG:'/home/roadmap-1.png',
                DONE:true
            },
            {
                TITLE:'LAUNCH GAME',
                PROPS:['Battlemode','Smartcontract','Partnetrship'],
                DATE:'22/2/2023',
                IMG:'/home/roadmap-2.png'
            },
            {
                TITLE:'LAUNCH GAME',
                PROPS:['Battlemode','Smartcontract','Partnetrship'],
                DATE:'22/2/2023',
                IMG:'/home/roadmap-3.png',
            },
        ]
    },
    GAMES:{
        TITLE:'Games'
    }
};

export const HOME = strings.HOME;
export const ROADMAP = strings.ROADMAP;
export const GAMES = strings.GAMES;
export default strings;