const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/Marikang/project',
    {
        branch: 'master',
        repo: 'https://github.com/revanrevan/Marikang-app.git',
        user: {
            name: 'revanrevan',
            email: 'revainblue21@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
);