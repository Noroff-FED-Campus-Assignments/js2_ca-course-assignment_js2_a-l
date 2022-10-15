import { token } from "./apiMethod.mjs";
// dette er for å hente ut id til url

const reactUrl = ` https://nf-api.onrender.com/api/v1/social/posts/${id}/react/👍`;

//legg en klasse på iconet for å kunne finne det.
const icon = document.querySelector(".react");

// icon.addEventListener("click", async () => {
//   const reactRespons = await fetch(reactUrl, {
//     method: "PUT",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const reactData = await reactRespons.json();
//   console.log(reactData);
// });
export async function iconReact() {
    const icon = document.querySelector(".react");
    const reactUrl = ` https://nf-api.onrender.com/api/v1/social/posts/${id}/react/👍`;
    icon.addEventListener("click", async () => {
        try {
            const reactRespons = await fetch(reactUrl, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const reactData = await reactRespons.json();
            console.log(reactData);
        } catch (error) {
            console.log(error);
        }
    });
}
