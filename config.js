module.exports = {
    app: {
        token: 'MTIzOTMxNjYxOTU3OTEwMTIzNQ.G0CIrD._gQvNxbsY0j4XZ0CBS7LdXvmTOEU6nHfxg14ME',
        playing: 'by the Community ❤️',
        global: true,
        guild: 'xxx',
        extraMessages: false,
        loopMessage: false,
        lang: 'en'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
