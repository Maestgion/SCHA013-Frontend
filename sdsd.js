const regex = /^[^,]*/gm;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('^[^,]*', 'gm')

const str = `UC-8QAzbLcRglXeN_MY9blyw,http://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw,Ben Awad
UC1szFCBUWXY3ESff8dJjjzw,http://www.youtube.com/channel/UC1szFCBUWXY3ESff8dJjjzw,Loi Liang Yang
UC2D6eRvCeMtcF5OGHf1-trw,http://www.youtube.com/channel/UC2D6eRvCeMtcF5OGHf1-trw,CodeWithChris
UC2Xd-TjJByJyK2w1zNwY0zQ,http://www.youtube.com/channel/UC2Xd-TjJByJyK2w1zNwY0zQ,Beyond Fireship
UC3PsooDxvFG0aEBe4JVtAbg,http://www.youtube.com/channel/UC3PsooDxvFG0aEBe4JVtAbg,Bitten Tech
UC58_wzhvJta3hDSPvRLDAqg,http://www.youtube.com/channel/UC58_wzhvJta3hDSPvRLDAqg,Anuj Bhaiya
UC5UAwBUum7CPN5buc-_N1Fw,http://www.youtube.com/channel/UC5UAwBUum7CPN5buc-_N1Fw,The Linux Experiment
UC7OpqK2KbYdoGE3E655eTHA,http://www.youtube.com/channel/UC7OpqK2KbYdoGE3E655eTHA,Movies Insight Clips
UC7raRsx4ojx3cyXT3x9-PuQ,http://www.youtube.com/channel/UC7raRsx4ojx3cyXT3x9-PuQ,techiesms
UC8ENHE5xdFSwx71u3fDH5Xw,http://www.youtube.com/channel/UC8ENHE5xdFSwx71u3fDH5Xw,ThePrimeagen
UC8wZnXYK_CGKlBcZp-GxYPA,http://www.youtube.com/channel/UC8wZnXYK_CGKlBcZp-GxYPA,NeuralNine
UC9-y-6csu5WGm29I7JiwpnA,http://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA,Computerphile
UC9x0AN7BWHpCDHSm9NiJFJQ,http://www.youtube.com/channel/UC9x0AN7BWHpCDHSm9NiJFJQ,NetworkChuck
UCA0H2KIWgWTwpTFjSxp0now,http://www.youtube.com/channel/UCA0H2KIWgWTwpTFjSxp0now,the roadmap
UCAfVmiWicFedk6tGOyrtZpg,http://www.youtube.com/channel/UCAfVmiWicFedk6tGOyrtZpg,Dev. Aditya
UCAmGmNMwqMNzIC-a6iOLagg,http://www.youtube.com/channel/UCAmGmNMwqMNzIC-a6iOLagg,Jay Kapoor
UCBJycsmduvYEL83R_U4JriQ,http://www.youtube.com/channel/UCBJycsmduvYEL83R_U4JriQ,Marques Brownlee
UCBKhdILeDie8iLkap216g7g,http://www.youtube.com/channel/UCBKhdILeDie8iLkap216g7g,In Depth Tech Reviews
UCBwmMxybNva6P_5VmxjzwqA,http://www.youtube.com/channel/UCBwmMxybNva6P_5VmxjzwqA,Apna College
UCCFVFyadjMuaR5O89yRToew,http://www.youtube.com/channel/UCCFVFyadjMuaR5O89yRToew,Virbox
UCDw_nP1r4kV0RFizJDaMX6A,http://www.youtube.com/channel/UCDw_nP1r4kV0RFizJDaMX6A,SA Creations
UCE_M8A5yxnLfW0KghEeajjw,http://www.youtube.com/channel/UCE_M8A5yxnLfW0KghEeajjw,Apple
UCFbNIlppjAuEX4znoulh0Cw,http://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw,Web Dev Simplified
UCGmR6lhKMlCkvrvb39vPtdA,http://www.youtube.com/channel/UCGmR6lhKMlCkvrvb39vPtdA,Steve (Builder.io)
UCGxwyXJWEarxh2XWqvygiIg,http://www.youtube.com/channel/UCGxwyXJWEarxh2XWqvygiIg,Eben Kouao
UCHa8J-xnRYOg5VuudfWpBgg,http://www.youtube.com/channel/UCHa8J-xnRYOg5VuudfWpBgg,ColorCode
UCJUmE61LxhbhudzUugHL2wQ,http://www.youtube.com/channel/UCJUmE61LxhbhudzUugHL2wQ,codedamn
UCJZv4d5rbIKd4QHMPkcABCw,http://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw,Kevin Powell
UCJbPGzawDH1njbqV-D5HqKw,http://www.youtube.com/channel/UCJbPGzawDH1njbqV-D5HqKw,thenewboston
UCJjwbqI73KPVtOqctkblcng,http://www.youtube.com/channel/UCJjwbqI73KPVtOqctkblcng,mewtru
UCKNTZMRHPLXfqlbdOI7mCkg,http://www.youtube.com/channel/UCKNTZMRHPLXfqlbdOI7mCkg,Philipp Lackner
UCLLVlcmcCP4CUe7xSqVEnxw,http://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw,Ryan Carniato
UCLyyqt2S4Ydc47W7Hiw3x0w,http://www.youtube.com/channel/UCLyyqt2S4Ydc47W7Hiw3x0w,RavenJS
UCMiJRAwDNSNzuYeN2uWa0pA,http://www.youtube.com/channel/UCMiJRAwDNSNzuYeN2uWa0pA,Mrwhosetheboss
UCNDspif9Nf6ZmwcTSW1bEow,http://www.youtube.com/channel/UCNDspif9Nf6ZmwcTSW1bEow,unusual hacker
UCNnUnr4gwyNmzx_Bbzvt29g,http://www.youtube.com/channel/UCNnUnr4gwyNmzx_Bbzvt29g,LinuxScoop
UCNoiWmvkDUL0q-6ECxNFH0Q,http://www.youtube.com/channel/UCNoiWmvkDUL0q-6ECxNFH0Q,JONATHAN GAMING
UCO2x-p9gg9TLKneXlibGR7w,http://www.youtube.com/channel/UCO2x-p9gg9TLKneXlibGR7w,Snazzy Labs
UCOTGVctbHD4UJK3R6Evfx9Q,http://www.youtube.com/channel/UCOTGVctbHD4UJK3R6Evfx9Q,TECH-iELA Shorts
UCOqY9xQMsmpVIwVw1jsEL1g,http://www.youtube.com/channel/UCOqY9xQMsmpVIwVw1jsEL1g,Flames
UCPkTyAZZROp4EfYrZYXhs8Q,http://www.youtube.com/channel/UCPkTyAZZROp4EfYrZYXhs8Q,CharaChorder
UCPxMZIFE856tbTfdkdjzTSQ,http://www.youtube.com/channel/UCPxMZIFE856tbTfdkdjzTSQ,BeerBiceps
UCQHLxxBFrbfdrk1jF0moTpw,http://www.youtube.com/channel/UCQHLxxBFrbfdrk1jF0moTpw,Love Babbar
UCRl79zOEtiLCglAFZJJzEZQ,http://www.youtube.com/channel/UCRl79zOEtiLCglAFZJJzEZQ,Santos Enoque
UCRvWt-hqdAQF1muHky56jxw,http://www.youtube.com/channel/UCRvWt-hqdAQF1muHky56jxw,JalRaj
UCSfchYZBi5CE5eSbvcqVw0w,http://www.youtube.com/channel/UCSfchYZBi5CE5eSbvcqVw0w,Bit Tech
UCSp-OaMpsO8K0KkOqyBl7_w,http://www.youtube.com/channel/UCSp-OaMpsO8K0KkOqyBl7_w,Let's Get Rusty
UCTUvDLTW9meuDXWcbmISPdA,http://www.youtube.com/channel/UCTUvDLTW9meuDXWcbmISPdA,DevTown
UCUMwY9iS8oMyWDYIe6_RmoA,http://www.youtube.com/channel/UCUMwY9iS8oMyWDYIe6_RmoA,No Boilerplate
UCUQo7nzH1sXVpzL92VesANw,http://www.youtube.com/channel/UCUQo7nzH1sXVpzL92VesANw,DIY Perks
UCVOTBwF0vnSxMRIbfSE_K_g,http://www.youtube.com/channel/UCVOTBwF0vnSxMRIbfSE_K_g,Labour Law Advisor
UCW6MNdOsqv2E9AjQkv9we7A,http://www.youtube.com/channel/UCW6MNdOsqv2E9AjQkv9we7A,PwnFunction
UCWEVAMMyXF2NP5txDESGemg,http://www.youtube.com/channel/UCWEVAMMyXF2NP5txDESGemg,Fat Dino
UCXUJJNoP1QupwsYIWFXmsZg,http://www.youtube.com/channel/UCXUJJNoP1QupwsYIWFXmsZg,Tech Burner
UCXWyDIBDOM_CjUpWfaC0kGA,http://www.youtube.com/channel/UCXWyDIBDOM_CjUpWfaC0kGA,Casi Creativo English
UCXuqSBlHAE6Xw-yeJA0Tunw,http://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw,Linus Tech Tips
UCY7t-zBYtdj6ZgiRpi3WIYg,http://www.youtube.com/channel/UCY7t-zBYtdj6ZgiRpi3WIYg,Tech Raj
UCYLAirIEMMXtWOECuZAtjqQ,http://www.youtube.com/channel/UCYLAirIEMMXtWOECuZAtjqQ,Stevdza-San
UCYUjYU5FveRAscQ8V21w81A,http://www.youtube.com/channel/UCYUjYU5FveRAscQ8V21w81A,Murtaza's Workshop - Robotics and AI
UCYxMATvBqKQx7utYcYK3waA,http://www.youtube.com/channel/UCYxMATvBqKQx7utYcYK3waA,sc0ut
UCZ4AMrDcNrfy3X6nsU8-rPg,http://www.youtube.com/channel/UCZ4AMrDcNrfy3X6nsU8-rPg,Economics Explained
UCZBdYvW1sI0Ui6ZFmkD10-w,http://www.youtube.com/channel/UCZBdYvW1sI0Ui6ZFmkD10-w,DOBBY IS LIVE
UCZMli3czZnd1uoc1ShTouQw,http://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw,Lee Robinson
UC_ML5xP23TOWKUcc-oAE_Eg,http://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg,Hussein Nasser
UCaSCt8s_4nfkRglWCvNSDrg,http://www.youtube.com/channel/UCaSCt8s_4nfkRglWCvNSDrg,CodeAesthetic
UCabufPpx-kCpmocqLL97V5g,http://www.youtube.com/channel/UCabufPpx-kCpmocqLL97V5g,Everything Interesting
UCajiMK_CY9icRhLepS8_3ug,http://www.youtube.com/channel/UCajiMK_CY9icRhLepS8_3ug,Alex Ziskind
UCatL-c6pmnjzEOHSyjn-sHA,http://www.youtube.com/channel/UCatL-c6pmnjzEOHSyjn-sHA,Khan GS Research Centre
UCbRP3c757lWg9M-U7TyEkXA,http://www.youtube.com/channel/UCbRP3c757lWg9M-U7TyEkXA,Theo - t3․gg
UCbT_7qRIrw8TMH8ovjTYBJQ,http://www.youtube.com/channel/UCbT_7qRIrw8TMH8ovjTYBJQ,TRS Clips
UCb_g6_uiljgeMDPMO98QEFQ,http://www.youtube.com/channel/UCb_g6_uiljgeMDPMO98QEFQ,Flutter Pod
UCbbGGT1qNgtOju1Ql6yrr9w,http://www.youtube.com/channel/UCbbGGT1qNgtOju1Ql6yrr9w,GamerZone07
UCcabW7890RKJzL968QWEykA,http://www.youtube.com/channel/UCcabW7890RKJzL968QWEykA,CS50
UCdp6GUwjKscp5ST4M4WgIpw,http://www.youtube.com/channel/UCdp6GUwjKscp5ST4M4WgIpw,TechWiser
UCeVMnSShP_Iviwkknt83cww,http://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww,CodeWithHarry
UCgkDs77BoEhMIgRUB4MKrtQ,http://www.youtube.com/channel/UCgkDs77BoEhMIgRUB4MKrtQ,Bedimcode
UChDX4wagpTQS0aTm4eyhJaw,http://www.youtube.com/channel/UChDX4wagpTQS0aTm4eyhJaw,KRSNA
UCiPDBcPWl9yswuULEZMosZw,http://www.youtube.com/channel/UCiPDBcPWl9yswuULEZMosZw,Mike Pearson / Engineering
UCit2rVgOvhyuAD-VH5H_IHg,http://www.youtube.com/channel/UCit2rVgOvhyuAD-VH5H_IHg,Volos Projects
UCj6mRqWSuind6otIRUWiKGg,http://www.youtube.com/channel/UCj6mRqWSuind6otIRUWiKGg,Ryoho Gaming
UCjTvZBc6GFbYkVs9rGWJLbA,http://www.youtube.com/channel/UCjTvZBc6GFbYkVs9rGWJLbA,Fusion Terror
UCk7xIEmd3MeyhIu2StLX5yA,http://www.youtube.com/channel/UCk7xIEmd3MeyhIu2StLX5yA,CodingNepal
UClb90NQQcskPUGDIXsQEz5Q,http://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q,developedbyed
UCldyi11QYNXYXiLjVbyw5dA,http://www.youtube.com/channel/UCldyi11QYNXYXiLjVbyw5dA,CodeHelp - by Babbar
UCmEzz-dPBVrsy4ZluSsYHDg,http://www.youtube.com/channel/UCmEzz-dPBVrsy4ZluSsYHDg,Hyperplexed
UCmeeY9kzNswUpbYyJntb3Aw,http://www.youtube.com/channel/UCmeeY9kzNswUpbYyJntb3Aw,PUBG MOBILE Esports
UCneyi-aYq4VIBYIAQgWmk_w,http://www.youtube.com/channel/UCneyi-aYq4VIBYIAQgWmk_w,Ranveer Allahbadia
UCqeTj_QAnNlmt7FwzNwHZnA,http://www.youtube.com/channel/UCqeTj_QAnNlmt7FwzNwHZnA,Sonny Sangha
UCrjKdwxaQMSV_NDywgKXVmw,http://www.youtube.com/channel/UCrjKdwxaQMSV_NDywgKXVmw,Novaspirit Tech
UCsBjURrPoezykLs9EqgamOA,http://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA,Fireship
UCsDTy8jvHcwMvSZf_JGi-FA,http://www.youtube.com/channel/UCsDTy8jvHcwMvSZf_JGi-FA,Abhi and Niyu
UCsSdGsFs8Cby3oxiMHTCNEg,http://www.youtube.com/channel/UCsSdGsFs8Cby3oxiMHTCNEg,DD ElectroTech
UCsXVk37bltHxD1rDPwtNM8Q,http://www.youtube.com/channel/UCsXVk37bltHxD1rDPwtNM8Q,Kurzgesagt – In a Nutshell
UCsrVDPJBYeXItETFHG0qzyw,http://www.youtube.com/channel/UCsrVDPJBYeXItETFHG0qzyw,Web Dev Cody
UCsuV4MRk_aB291SrchUVb4w,http://www.youtube.com/channel/UCsuV4MRk_aB291SrchUVb4w,Kavsoft
UCsyxFSOnoz5wYOuU0hZfSIg,http://www.youtube.com/channel/UCsyxFSOnoz5wYOuU0hZfSIg,Half Man Half Tech
UCtHaxi4GTYDpJgMSGy7AeSw,http://www.youtube.com/channel/UCtHaxi4GTYDpJgMSGy7AeSw,Michael Reeves
UCtKKEqJIPCT9E6WMas7lC5Q,http://www.youtube.com/channel/UCtKKEqJIPCT9E6WMas7lC5Q,Arc Technologies
UCuXm84E6yWF0dIKmwvwc9sQ,http://www.youtube.com/channel/UCuXm84E6yWF0dIKmwvwc9sQ,Afgprogrammer
UCvdBzm8DPlyi8KUe4F1e4tQ,http://www.youtube.com/channel/UCvdBzm8DPlyi8KUe4F1e4tQ,Scumbag Dad
UCvpfclapgcuJo0M_x65pfRw,http://www.youtube.com/channel/UCvpfclapgcuJo0M_x65pfRw,Beebom
UCzDPCRJHfPusmXd6zl8bE7w,http://www.youtube.com/channel/UCzDPCRJHfPusmXd6zl8bE7w,Cryptical Coder
UCzNf0liwUzMN6_pixbQlMhQ,http://www.youtube.com/channel/UCzNf0liwUzMN6_pixbQlMhQ,Coder Coder
UCzdMY6Qsv9CrsNCPgtZlrIw,http://www.youtube.com/channel/UCzdMY6Qsv9CrsNCPgtZlrIw,TRS Clips हिंदी
UCzgCuuPQa1nMlZP9ruPYDNw,http://www.youtube.com/channel/UCzgCuuPQa1nMlZP9ruPYDNw,R.G Bucket List
UCznj32AM2r98hZfTxrRo9bQ,http://www.youtube.com/channel/UCznj32AM2r98hZfTxrRo9bQ,Clear Code
UCzoBz4EKrLOvm3L4DDNc_pg,http://www.youtube.com/channel/UCzoBz4EKrLOvm3L4DDNc_pg,Creative Ambition`;
let m;

while ((m = regex.exec(str)) !== null) {
  // This is necessary to avoid infinite loops with zero-width matches
  if (m.index === regex.lastIndex) {
    regex.lastIndex++;
  }

  // The result can be accessed through the `m`-variable.
  m.forEach((match, groupIndex) => {
    console.log(match);
  });
}
