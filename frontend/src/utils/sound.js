import click from '../../public/sounds/pop.wav';
import success from "../../public/sounds/cuteSound.wav";
import fail from "../../public/sounds/heartbreak.mp3";

const audioPool = {
  click: new Audio(click),
  success:new Audio(success),
  fail: new Audio(fail),
}

Object.values(audioPool).forEach(a=>{
  a.volume = 0.8
})

export const playSound = (name)=>{
  const audio = audioPool[name]
  if(!audio) return
  
  audio.currentTime = 0
  audio.play().catch(()=>{})
}