 module.exports = {
  token: process.env.TOKEN,
  prefix: "p!",
  server: "https://discord.gg/hPHvF8BggE",

  yes: "✅",
  no: "❌",

  owners: ["996191835926044702", "902312943574741102", "92929282"],

  special: ["1007693433864994826", "941768023914709022", "981408241898647582"],

 mongo_atlas: {
    username: process.env.username,
    password: process.env.password,
    cluster: process.env.cluster,
    shard: {
      one: process.env.shard1,
      two: process.env.shard2,
      three: process.env.shard3
    }
  },
  webhooks: {
    cmd: {
      ID: process.env.webid,
      Token: process.env.webtoken,
    },
    guild: {
      ID: process.env.guildid,
      Token: process.env.guildtoken
    },
	vote: {
		ID: '',
		Token: ''
	}
  },
  cooldown: 100,
  
  topgg: {
	  auth: "",
	  token: ""
  }
};

