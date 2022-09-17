import _shuffle from 'lodash/shuffle'
import _ from 'lodash'

import { names } from './names'
import { boyNames } from './boyNames'
import { girlNames } from './girlNames'

const investorNames = [
  'Inuyasha',
  'Oda',
  'Fujiko',
  'Tsubasa',
  'Luffy',
  'Kaido',
  'Linlin',
  'Thi',
  'Hai',
  'Luong',
  'Thach',
  'Trung',
  'Quang',
  'Huy',
  'My',
  'Ha',
  'Shirahoshi',
  'Otohime',
  'Nami',
  'Nico Robin',
  'Otohime',
]

export const texts = `Some nights I stay up cashing in my bad luck
Some nights I call it a draw
Some nights I wish that my lips could build a castle
Some nights I wish they'd just fall off

But I still wake up, I still see your ghost
Oh, Lord, I'm still not sure what I stand for oh
Whoa oh oh (What do I stand for?)
Whoa oh oh (What do I stand for?)
Most nights I don't know anymore...
Oh, whoa, oh, whoa, oh, whoa, oh, oh,
Oh, whoa, oh, whoa, oh, whoa, oh, oh

This is it, boys, this is war - what are we waiting for?
Why don't we break the rules already?
I was never one to believe the hype
Save that for the black and white
I try twice as hard and I'm half as liked,
But here they come again to jack my style

That's alright (that's alright)
I found a martyr in my bed tonight
She stops my bones from wondering just who I am, who I am, who I am
Oh, who am I? Mmm... Mmm...

Well, some nights I wish that this all would end
'Cause I could use some friends for a change.
And some nights I'm scared you'll forget me again
Some nights I always win, I always win...

But I still wake up, I still see your ghost
Oh, Lord, I'm still not sure what I stand for, oh
Whoa oh oh (What do I stand for?)
Whoa oh oh (What do I stand for?)
Most nights I don't know... (oh, come on)

So this is it. I sold my soul for this?
Washed my hands of that for this?
I miss my mom and dad for this?

(Come on)

No. When I see stars, when I see, when I see stars, that's all they are
When I hear songs, they sound like a swan, so come on.
Oh, come on. Oh, come on. Oh, come on!

Well, that is it guys, that is all - five minutes in and I'm bored again
Ten years of this, I'm not sure if anybody understands
This one is not for the folks at home;
Sorry to leave, mom, I had to go
Who the fuck wants to die alone all dried up in the desert sun?

My heart is breaking for my sister and the con that she called "love"
When I look into my nephew's eyes...
Man, you wouldn't believe the most amazing things that can come from...
Some terrible nights... ah...

Oh, whoa, oh, whoa, oh, whoa, oh, oh,
Oh, whoa, oh, whoa, oh, whoa, oh, oh

The other night you wouldn't believe the dream I just had about you and me
I called you up but we'd both agree

It's for the best you didn't listen
It's for the best we get our distance... Oh...
It's for the best you didn't listen
It's for the best we get our distance... Oh...

100+ thuật ngữ Blockchain và Crypto quan trọng cần biết!',
If you could change careers right this second, what would you do?
Tableau for Beginners: Get CA Certified, Grow Your Career
`

export const MF_USDT = 3.33

export const itemNFTs = [
  {
    id: 1,
    text: 'Pokémon Yellow',
    src: 'https://picsum.photos/id/10/300/300',
  },
  {
    id: 2,
    text: 'Mega Man X',
    src: 'https://picsum.photos/id/20/300/300',
  },
  {
    id: 3,
    text: 'Super Mario World',
    src: 'https://picsum.photos/id/30/300/300',
  },
  {
    id: 4,
    text: 'Pacman',
    src: 'https://picsum.photos/id/40/300/300',
  },
  {
    id: 5,
    text: 'Kage',
    src: 'https://picsum.photos/id/50/300/300',
  },
  {
    id: 6,
    text: 'Vue',
    src: 'https://picsum.photos/id/51/300/300',
  },
  {
    id: 7,
    text: 'React',
    src: 'https://picsum.photos/id/52/300/300',
  },
  {
    id: 8,
    text: 'Angular',
    src: 'https://picsum.photos/id/53/300/300',
  },
  {
    id: 9,
    text: 'Svelte',
    src: 'https://picsum.photos/id/54/300/300',
  },
  {
    id: 10,
    text: 'Mako',
    src: 'https://picsum.photos/id/55/300/300',
  },
]

export let itemComments = [
  {
    id: 1,
    author: 'Hela',
    text: "Super, I'm rich",
  },
  {
    id: 2,
    author: 'Thor',
    text: 'Where is my hammer?',
  },
  {
    id: 3,
    author: 'Erick',
    text: 'Need more member in this team',
  },
  {
    id: 4,
    author: 'Hanzo',
    text: "Shut up, you're a bad guy",
  },
  {
    id: 5,
    author: 'Tony',
    text: "I'm a good guy",
  },
  {
    id: 6,
    author: 'Chris',
    text: 'We need you, and you need me in this guild',
  },
  {
    id: 7,
    author: 'Odin',
    text: 'Look, my son is here with me in this guild',
  },
  {
    id: 8,
    author: 'Mark',
    text: 'May I have more money this month? I double my KPI',
  },
]

export let persons = Array(100)
  .fill(0)
  .map((c, i) => {
    const rand = makeid(6)
    const id = 10000 + i

    return {
      id,
      name: names[i],
      image: `https://i.pravatar.cc/300?u=${id}`,
      role: 'manager',
    }
  })

export let itemArticles = texts
  .split(/\n/)
  .filter((line) => line.trim())
  .map((line, idx) => ({
    id: idx,
    order: idx,
    title: line,
    image: `https://picsum.photos/id/${idx}/300/300`,
    author: getRandomItems(persons, 1)[0],
  }))

function makeid(length) {
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

/**
 * return some random items
 * @param count
 */
export function getRandomItems(items: any[], count: number) {
  return _shuffle(items).slice(0, count)
}

export let investorsMap = _.keyBy(persons, 'name')

export let itemGuilds = [
  {
    id: 1,
    game: 'Mech Master',
    name: 'Hesman',
    owners: getRandomItems(persons, 3),
    players: getRandomItems(persons, 56),
    managers: getRandomItems(persons, 3),
    invested: 2000,
    dailyEarnings: 19,
    tvl: 250_000_000,
  },
  {
    id: 2,
    game: 'Epic War',
    name: 'Yet Kieu',
    owners: [investorsMap.Luffy, investorsMap.Kaido],
    players: getRandomItems(persons, 95),
    managers: getRandomItems(persons, 2),
    invested: 1000,
    dailyEarnings: 29,
    tvl: 88_300_000,
  },
  {
    id: 3,
    game: 'Axie Infinity',
    name: 'Super Trouper',
    owners: [investorsMap.Thi, investorsMap.Hai, investorsMap.Luong],
    players: getRandomItems(persons, 253),
    managers: getRandomItems(persons, 2),
    invested: 3000,
    dailyEarnings: 13,
    tvl: 40_600_000,
  },
  {
    id: 4,
    game: 'Wonder Hero',
    name: 'Tony Stark',
    owners: [investorsMap.Huy, investorsMap.My, investorsMap.Ha],
    players: getRandomItems(persons, 16),
    managers: getRandomItems(persons, 1),
    invested: 4000,
    dailyEarnings: 14,
    tvl: 5_600_012,
  },
  {
    id: 5,
    game: 'Crabada',
    name: 'Neptune',
    owners: [investorsMap.Shirahoshi, investorsMap.Otohime],
    players: getRandomItems(persons, 12),
    managers: getRandomItems(persons, 1),
    invested: 5500,
    dailyEarnings: 20,
    tvl: 645_600_012,
  },
]

export let itemNominatingGames = [
  {
    id: 6,
    game: 'MetaCity',
    image: 'https://metacity.game/images/group_25.svg',
    vote: 29,
    risk: 'low',
  },
  {
    id: 7,
    game: 'Area53',
    image: 'https://cdn.area53.network/statica53/assets/css/imgs/fe1.png',
    vote: 16,
    risk: 'low',
  },
  {
    id: 8,
    game: 'Thetan',
    image: 'https://thetanarena.com/ca9d6b88620335e689a3.png',
    vote: 13,
    risk: 'medium',
  },
  {
    id: 9,
    game: 'RadioCaca',
    image: 'https://racawebsource.s3-accelerate.amazonaws.com/assets/usm.png',
    vote: 10,
    risk: 'high',
  },
]
