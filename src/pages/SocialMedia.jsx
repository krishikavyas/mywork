import { min } from "@floating-ui/utils";
import { useEffect } from "react";

function SocialMedia() {
  const editedContent = [
    "https://www.instagram.com/reel/C4k-kQjPzm8/?igsh=MXBsb21nZnJkOGJ0dA==",
    "https://www.instagram.com/p/C4QZkAcIAiH/?igsh=bW5zY3JuNGhmdnQ0",
    "https://www.instagram.com/reel/C4N28cyoG33/?igsh=MTlwcXM3N3U1c3l6dQ==",
    "https://www.instagram.com/reel/C4IouMCPrEt/?igsh=dWw5d3cwMWV6ZzVh",
    "https://www.instagram.com/reel/C34_yBsv3rG/?igsh=MXIyeGttdGppeG1sbQ==",
    "https://www.instagram.com/reel/C3pzGCloJU_/?igsh=bmZyczl1bjlpNjVw",
    "https://www.instagram.com/reel/C3khrM6JqRt/?igsh=aGQzMTY1bWZ5anpw",
    "https://www.instagram.com/reel/C3aNL4Avihu/?igsh=M3AxeWQwaXRxZ3Vw",
    "https://www.instagram.com/reel/C3RqxhrsSnv/?igsh=MTZiMnZtOGlvZHE5Mw==",
    "https://www.instagram.com/p/C3Mnzl2IVgU/?igsh=azV4Z2kwdHJ0eTVz",
    "https://www.instagram.com/reel/C3HlmI6v4Te/?igsh=cDVnMzg3ZW5hYmhi",
    "https://www.instagram.com/reel/C3DLR_qPK6K/?igsh=MXZzN2txbHVwMm1nbg==",
    "https://www.instagram.com/p/C2xDOVdP8Ow/?igsh=aWs4bTRyOHFkNXVk",
    "https://www.instagram.com/reel/C2ueG7XPopE/?igsh=bXV1c2wyd3QzYWwy",
    "https://www.instagram.com/p/C2kLWpov6js/?igsh=MTNqN2M5d2NpMGIwbg==",
    "https://www.instagram.com/reel/C2fBMGPvB9Y/?igsh=MTk5dWcydHF3ZnF5Ng==",
    "https://www.instagram.com/p/C2Uuk3jPvlj/?igsh=MTF5MTV3c3RnMDJmdQ==",
    "https://www.instagram.com/reel/C2SJaXpvmZg/?igsh=MXFlMGs5M2NhZnM4cw==",
    "https://www.instagram.com/p/C2Pkm9bPeJa/?igsh=Y294bGloM3poZnQ2",
    "https://www.instagram.com/reel/C2KbHW5J_J5/?igsh=MWxtY2tzZGhmODdhYw==",
    "https://www.instagram.com/p/C2H2QMYPQnR/?igsh=ZHprb2xtNWxrN2px",
    "https://www.instagram.com/p/C1E5mZBJQeK/?igsh=MXF2ZTZhdzhicGowZw==",
    "https://www.instagram.com/p/C0jbPQHJTOl/?igsh=Zm9zNjdoa2I5MGVw"
  ];
  
  const scriptedContent = [
    "https://www.instagram.com/reel/DDollBDJ6hz/?igsh=MWo1NzZheGYwODExbQ==",
    "https://www.instagram.com/reel/DC9FrJZxG-I/?igsh=MTBlbm9lYjZqM2F2dw==",
    "https://www.instagram.com/reel/DCHBdTtq-Oy/?igsh=d3h3bmNlMXEzdWc2",
    "https://www.instagram.com/reel/DB_Vd6wpzAZ/?igsh=bXl3dGtmaWlhNjZo",
    "https://www.instagram.com/reel/DBYzCAMBnbi/?igsh=bDVtOWdxc2lhdWJl",
    "https://www.instagram.com/reel/DBIyNx3JISi/?igsh=MXVwYW84bGFpY3c0MQ==",
    "https://www.instagram.com/reel/DAnJjHXPMrX/?igsh=MWhsbnpvdGc1dTBvZA==",
    "https://www.instagram.com/reel/DAaVwgpq0J9/?igsh=Z3Zta3hvdnhzMnky",
    "https://www.instagram.com/reel/DAN1V2MNxAa/?igsh=Y2lmY2w2eDZrN3Bv",
    "https://www.instagram.com/reel/DAAh2mUhEQ6/?igsh=MXI5aWk1eGF0b2ZyNw==",
    "https://www.instagram.com/reel/C-Wj17sii5O/?igsh=cTk3M2x4eXpyZXMy",
    "https://www.instagram.com/reel/C8PSopkpv-T/?igsh=aHM4NmtqOTQ5dzF5",
    "https://www.instagram.com/reel/C66ATEyoftL/?igsh=MWFoZDd1dDdxeDc2Mg==",
    "https://www.instagram.com/reel/C6tJeTTRmW-/?igsh=MWpxY2hvMWhkMWtmNw==",
    "https://www.instagram.com/reel/C6IhiDiM9Yt/?igsh=MWZ5czNkbm41bzZ4MA==",
    "https://www.instagram.com/reel/C52_b8PsJ6l/?igsh=eDY4OTY2cXh5ankx",
    "https://www.instagram.com/reel/C50bT0vsR0l/?igsh=MW0xamtyc2hxM2kzeQ==",
    "https://www.instagram.com/reel/DGAg-HystvN/?igsh=a3pnOWJna3A0bHE3",
    "https://www.instagram.com/reel/DF5FFZzBSKj/?igsh=MTlkazJjem5kdmY3Yw==",
    "https://www.instagram.com/reel/DFNECs0KJAg/?igsh=MXZ6cnl2Y2Rzb2g0Nw=="
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const renderPosts = (content) => {
    return content.map((url, index) => (
      <div key={index} className="bg-white shadow-lg rounded-xl p-4 border border-gray-200 flex-grow  " style={{width: "calc(33.3% - 1rem)", minWidth: "324px", boxSizing: "border-box"}}>
        <blockquote
          className="instagram-media w-full"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
        ></blockquote>
      </div>
    ));
  };

  return (
    <div className=" min-h-screen pt-6 pb-6 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800 mt-3">Social Media Content</h1>
      <div className=" bg-gray-100 text-gray-700 text-center p-4 rounded-lg shadow-md max-w-lg absolute top-2 right-5">
        <p className="text-sm">
          ⚠️ If the content doesn’t load properly, please reload the page.
        </p>
      </div>
      <section className="mb-12 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b pb-2">Scripted + Edited Content</h2>
        <div className="flex flex-wrap justify-center gap-6 w-full" >
          {renderPosts(editedContent)}
        </div>
      </section>

      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b pb-2">Scripted Content</h2>
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {renderPosts(scriptedContent)}
        </div>
      </section>


    </div>
  );
}

export default SocialMedia;
