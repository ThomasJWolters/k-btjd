'use strict'
/*
//?
//?
*/
export const info = {
    name: "MadeByJrNemirez",
    about: "CommandMadeByJrNemirez",
    credits: "JrNemirez",
    dependencies: ["fs"],
}
export const langData = {
 "vi_VN": {
  "werewolves.description": "ma soi"
 }
}
export const roles = new Object(
{
  identification: 0,
  role: "Doctor",
  description: "[English]\nChoose one player to protect every night. That player cannot be killed that night\n[Vietnamese]\nChọn một người chơi để che chở vào mỗi đêm. Người chơi đó sẽ không bị giết",
  team: "Village"
 }, 
 {
  identification: 1,
  role: "Vigilante",
  description: "[English]\nDuring the day you can either shoot or reveal another player. Both actions can only be done once but not during the same day\n[Vietnamese]\nTrong ngày, bạn có thể bắn hoặc tiết lộ vai trò của người khác. Cả hai hành động này chỉ có thể thực hiện được một lần, nhưng không thể thực hiện trong cùng một ngày. Vai trò của bạn sẽ được tiết lộ khi bắn người chơi khác",
  team: "Village"
 }, 
 {
  identification: 2,
  role: "Jailer",
  description: "[English]\nDuring the day, you can select a player to put in jail the following night. You can talk to the jailed player at night anonymously. Jailed players cannot use their ability or be attacked. You have one bullet to kill one jailed player during the night \n[Vietnamese]\nVào ban ngày, bạn có thể chọn một người chơi để giam vào ngục đêm hôm sau, bạn có thể nói chuyện ẩn danh với người chơi bị giam vào ban đêm. Người chơi bị giam không thể sửa dụng khả năng của họ hoặc bị tấn công. Bạn có một viên đạn để giết người chơi bị giam vào ngục trong đêm",
  team: "Village"
 },
 {
  identification: 3,
  role: "Aura seer",
  description: "[English]\nEach night you can select a player to uncover their alignment: good, evil, or unknown. Evil player belong to the werewolves and good players belong to the villagers team\n[Vietnamese]\nMỗi đêm bạn có thể bói 1 người chơi để biết họ Thiện, Ác hay không rõ. Phe ác là phe ma sói, Phe thiện là phe dân làng",
  team: "Village"
 },
 {
  identification: 4,
  role: "Detective",
  description: "[English]\nEach night you can select two players to uncover if they are in the same team. Possible teams are: village, werewolves, fool, headhunter, serial killer, etc.",
  team: "Village"
 },
 {
  identification: 5,
  role: "Medium",
  description: "[English]\nDuring the night you can talk anonymously with the dead. Once during the game you can select a dead villager at night to revive at the start of the next day.",
  team: "Village"
 },
 {
  identification: 6, 
  role: "Loudmouth",
  description: "[English]\nYou can select a player whose role will be revealed to everyone when you die",
  team: "Village"
 },
{
 identification: 7, 
 role: "Fool",
 description: "[English]\nYour goal is to get lynched by the village. You win if they lynch you",
 team: "Solo"
},
{
 identification: 8,
 role: "Junior werewolf",
 description: "[English]\nYou are the Junior werewolf. Because you are so cute, you are can select another player to be killed when you are killed",
 team: "Werewolves"
},
{
 identification: 9,
 role: "Wolf shaman",
 description: "[English]\nDuring the day you can enchant another player. For seers , aura seers, etc. This player will appear to be a wolf shaman at the next night. If you are the last werewolf, you cannot enchant anybody",
 team: "Werewolves"
},
{
 identification: 10,
 role: "Alpha werewolf",
 description: "[English]\nYour night vote counts double. Once per day, you can send private message to the other werewolves during the day that only they can see ",
 team: "Werewolves"
},
{
 identification: 11,
 role: "Wolf seer",
 description: "[English]\nEach night you can select a player to uncover their role. If you are the last werewolf or you resign your ability, you become a regular werewolf",
 team: "Werewolves"
},
{
 identification: 12,
 role: "Arsonist",
 description: "[English]\nEvery night you can either select two players to douse with gasoline, or ignite all doused players with kill them They are protected at the start of the night cannot be doused. You cannot be killed by the werewolves. You win if you are the last player alive ",
 team: "Solo"
}
 )
function werewolves() {
 const config = {
        name: "werewolves",
        aliases: ["masoi"],
        description: getLang("werewolves.description", null, info.name),
        usage: "",
        permissions: [0],
        cooldown: 5
    }
    const onCall = async ({ api, message, args, getLang, db, controllers, userPermissions, prefix }) => {
       var { send, reply, react } = message;

    }
    return { config, onCall };
}
export const scripts = {
 commands: {
  werewolves
 }
}
