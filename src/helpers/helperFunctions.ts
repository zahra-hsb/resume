"use server"
// import { headers } from "next/headers";
// import { userAgentFromString } from "next/server";


// export async function isServerMobile() {
//   const headersList = headers();
//   const userAgent = headersList.get("user-agent");
//   const { device } = userAgentFromString(userAgent || undefined);
//     console.log('device => ', userAgent)
    
//   return device;
// }

export const isMobileDevice = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

