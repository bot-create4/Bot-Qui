//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JaSkw1NDZOUnVTV3liaUovUHA3OURFQndEemE1eEd6aGxKdG9hbU5Hdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFZSNDg1a2JuTXkyQmc4ZkRkZVdJaVRDb1A5TWVGcnE0VmFZWDhmb1JsZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QjR0QUY4Y3p2Q1lEVUh3TjhmclhsVm4xSEc4MjRtK09pcnFURnNWOEhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpelRzbTlJOGljRHhRZFZCYUxaUWtEWGJGUUw4ZHZWWkVDaW9QWkR1NVhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFbFF0cHpGTXRlYU9xVlhSSXFnYmtpTGxSbGI4Y1BicTBza1l0WHF6R1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhpbTRTYlo3bkJLSzBwcjFPaURLZUx5M1JicDFPM0lNZFpROWk2ZDZaM1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tPaGEyY2RFeEd1SEJvaFh4S0U5UlFFQjJwdVBUNjBwei92eUhTK0pGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1VRbjZRd2gyZE0xcWV3QzQ3YmNMclp0RXJkS0xLd3lEM2RsTnMydXRpdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpibjZQSyt4TGJkY1VVZWI5eXgvOTZFTDBRYjdNYkVXSjRhek9VbGFNdnI5YnVZcU8wUEk5VEZYQXdOckJETmh4VFR0K3RGTGp2cCsxazFxR0JCQkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJnell4Yy8rMTUxOHJybVdZS2Q5bm9YdmF6d1NzRjhOV1ZTZ0g2UDdOKzg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQxODUyNzg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUzMTUwQUQ5QTgxQUJDODA2MTFBQjEzQjBGMTIxMzdBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTAyNTg2MDd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQxODUyNzg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU2MzU1MDZBRDE1QkNGMDhEQzI5QkQ5NjJBRTQwRUExIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTAyNTg2MDd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJrMEY2aUh4VEVxTTdRYnZQdUNLZ1EiLCJwaG9uZUlkIjoiODk4MGE4MjUtYWIxOC00MDI1LWE3ZTQtM2M4MjMyOTc3OTE1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5ZTHBvN1JCaDFqZE0rQ0ZXVm01VzBWY2NJbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5L0ZJYVFuYmVacUhLOHRQRUxGY2NoQ3FMZHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzZSMlFCTkUiLCJtZSI6eyJpZCI6Ijk0NzQxODUyNzg3OjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1NTY1MDQ0NDkwMjU2Njo2QGxpZCIsIm5hbWUiOiJTTCBDbHViIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMnV2RlVRbmFmTHdnWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWbUluOFVHS3NMZmw5WWliVUE3T1k2NVI1YmtVS08yY2FZeTdzMXVvZmhFPSIsImFjY291bnRTaWduYXR1cmUiOiJVcmhNNVI0VWFvRVVtbFZTaVNOUzNuTnI1ek5mcVQ3ZC9adVBUMzNJMEk2TUJOYjhueTMvNzRsQks4aWgxemgwZWd3UHFaTm1xN0ZQNSt5emJYbVBEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaFpXTnJHaU5GNzdiOUd3M3dvZUkvVU14Y0F1U1hsOGF2b2x4YldvUm8wVjE1YWNpcVhSMTJBU2FWTWpBWFczaEx1Tjdzd09JRWR0dmJsWk5zK1BxQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MTg1Mjc4Nzo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZaaUovRkJpckMzNWZXSW0xQU96bU91VWVXNUZDanRuR21NdTdOYnFINFIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBTUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDI1ODYwMiwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKUm8ifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94741852787",
  PASSWORD: 
    process.env.PASSWORD || "Ransara",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
