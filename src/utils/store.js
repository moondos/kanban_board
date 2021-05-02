
export const dataMock = [
    {
        id: 0,
        title: 'Backlog',
         issues: [
             {
                id: 0,
                name: 'Sprint bugfix',
                body: "Lorem ipsum dolor sit amet, eu scelerisque felis imperdiet. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Auctor elit sed vulputate mi. ",
                createTime: new Date().toLocaleString(),
             },
             {
                id: 1,
                name: 'Learn React',
                body: "Selerisque felis imperdiet. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Auctor elit sed vulputate mi. ",
                createTime: new Date().toLocaleString(),
            },
            
         ],
         url: "/blockinfo/backlog",
    },
    {
        id: 1,
        title: 'Ready',
        issues: [
            {
                id: 0,
                name: 'Call to Jax',
                body: "Call him to know how he is",
                createTime: new Date().toLocaleString(),
            },
            {
               id: 1,
               name: 'Read a book',
               body: "Read Abai Joly",
               createTime: new Date().toLocaleString(),
           },
        ],
        url: "/blockinfo/ready",
   },
   {
    id: 2,
    title: 'In progress',
    issues: [
        
    ],
    url: "/blockinfo/inprogress",
},
{
    id: 3,
    title: 'Finished',
    issues: [
        
    ],
    url: "/blockinfo/finished",
},
    // code
 ]




