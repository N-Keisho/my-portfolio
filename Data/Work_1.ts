import {Work} from '@/types/work';

const Work1: Work = {
    id: 1,
    title: 'テスト1',
    thubmnail: '/works/1.png',
    created_at: '2024-05-15',
    tag: ['個人作成'],
    discription: '高校時代に作成した思い出の作品です．当時はプログラミングなどやったこともなく，わけもわからぬまま作成していました．',
    period: '2週間',
    tech: ['HTML', 'CSS'],
    links: [
        {
            name: 'GitHub',
            url: 'https://github.com/N-Keisho'
        },
        {
            name: 'Deploy',
            url: 'https://n-keisho.github.io/Kunitachi_72600HP/'
        }
    ]
};

export default Work1;