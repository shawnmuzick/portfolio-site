const articles = [
  {
    date: "06-17-2021",
    title: "HTML Templates",
    short: "In this article, we explore dynamically creating articles!",
    link: "/articles/2021/htmlTemplates",
    content: {
      h1: { id: "title", content: "Html Templates" },
      div: {
        class: ["flex", "center", "card", "bg-dark", "border-purple"],
        content: {
          h2: { content: "Some Things I Ran Into:" },
          p: {
            content: `Because these templates were usually executing paths to javascript or
      image files, when the were invoked in their "new" home, the relative
      paths were now relative to that new home. Thus, absolute paths from
      the project root, in this case "public" had to be used to ensure the
      path would remain consistent and not vary based on where it was
      invoked`,
          },
          p: {
            content: `Here's the code which generates the social links footer area at the
      bottom of each page:`,
          },
          pre: {
            class: ["flex", "bg-main", "rounded"],
            content: `const footer = document.getElementsByTagName("footer")[0];
            const template = document.createElement("template");
            async function getTemplate() {
                const data = await (await fetch("/public/templates/footer.html")).text();
                template.innerHTML = data;
                let section = template.content.querySelector('section');
                footer.appendChild(section);
            }
            getTemplate();
            `,
          },
          p: {
            content: ` As this site is growing, and because I'm not using any kind of css or
            build tools, I'm already running into some code management issues.
            Send help`,
          },
        },
      },
    },
    meta_keywords: [],
    extraStyles: ["/css/articles/2021/htmlTemplates.css"],
  },
];
